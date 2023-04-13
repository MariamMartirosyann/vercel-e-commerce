import { AnimateKeyframes } from "react-simple-animate";
import { useMediaQuery } from "react-responsive";
import { Box, Typography, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { Link } from "react-router-dom";
import { IItem } from "../../app/redux/interface";
import { items } from "../../app/redux/constants";
import RightDrawer from "../../shared/Drawer/rightDrawer";
import Cart from "../cart";
import { useDispatch } from "react-redux";
import { addToCart } from "../../app/redux/slices/cartSlice";


const useStyles: any = makeStyles({
  title: {
    boxSizing: "border-box",
    width: "100%",
    background: "rgba(239, 239, 240, 1)",
    display: "flex",
    alignItems: "center",
    paddingBottom: "2%",
  },
  titleBox: {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    marginLeft: "20%",
    marginTop: "5%",
  },
  quickView: {
    width: "100%",
    height: "20%",
    position: "absolute",
    background: "rgba(239, 239, 240, .5)",
    left: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    width: "70%",
    margin: "5px auto",
  },
  textDecorationNone: {
    textDecoration: "none",
    color: "black",
  },
});

const Shop = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [hoveredCart, setHoveredCart] = useState<number>(-1);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1050px)" });

  const showCartHandler = (i: number) => {
    setHoveredCart(i);
  };

  const hideCartHandler = () => {
    setHoveredCart(-1);
  };

  const handleCloseCartDrawer = () => {
    setDrawerOpen(false);
  };

  const handleAddToCart = (item: IItem) => {
    setDrawerOpen(true);
    dispatch(addToCart(item));
  };
  return (
    <>
      <Box className={classes.title}>
        <Box className={classes.titleBox}>
          <Typography variant={isLargeScreen ? "h4" : "h6"} component="div">
            SHOP
          </Typography>
          <Typography variant={isLargeScreen ? "h4" : "h6"} component="div">
            YOUR EZ
          </Typography>
        </Box>
      </Box>
      <Grid
        container
        spacing={5}
        width="80%"
        margin="30px auto"
        className={classes.item}
      >
        {items.map((i: IItem) => (
          <Grid
            item
            key={i.id}
            md={6}
            xs={12}
            onMouseLeave={hideCartHandler}
            onMouseEnter={() => showCartHandler(i.id)}
          >
            <Box className={classes.item}>
              <Link
                to={`/shop-item/${i.id}`}
                className={classes.textDecorationNone}
              >
                <Box width="100%" sx={{ position: "relative" }}>
                  <img
                    src={hoveredCart === i.id ? i.srcHover : i.src}
                    alt="item"
                    style={{ width: "90%", height: "80%" }}
                  />
                  {hoveredCart === i.id ? (
                    <AnimateKeyframes
                      iterationCount="1"
                      keyframes={[
                        "transform: translateY(-20%)",
                        "transform: translateY(-15%),",
                        "transform: translateY(-10%),",
                        "transform: translateY(0),",
                      ]}
                      play
                    >
                      <Box className={classes.quickView}>Qiuk View</Box>
                    </AnimateKeyframes>
                  ) : null}
                </Box>
              </Link>
              <Typography variant="h6" component="div">
                EZ 0000{i.id}
              </Typography>
              <Typography variant="body1" component="div" mb={2}>
                ${i.price}.00
              </Typography>
              <Button
                variant="contained"
                onClick={() => handleAddToCart(i)}
                style={{
                  color: "white",
                  background: "primary",
                  width: "100%",
                }}
              >
                Add To Cart
              </Button>
            </Box>
          </Grid>
        ))}
        <Grid item></Grid>
      </Grid>
      <RightDrawer
        open={isDrawerOpen}
        setOpen={setDrawerOpen}
        onClose={handleCloseCartDrawer}
        title={` Cart`}
      >
        <Cart isDrawer={true} />
      </RightDrawer>
    </>
  );
};

export default Shop;
