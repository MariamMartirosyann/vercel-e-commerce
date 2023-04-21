import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { useParams } from "react-router-dom";
import { Box, Button, Grid, SvgIconTypeMap, Typography } from "@mui/material";
import { selectItems } from "../../app/redux/slices/ItemSlice";
import { IItem } from "../../app/redux/interface";
import ItemAccordion from "./accardion";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { addToCart } from "../../app/redux/slices/cartSlice";
import RightDrawer from "../../shared/Drawer/rightDrawer";
import Cart from "../cart";


interface IIcons {
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  color: string;
}

const Icons = [
  { id: 1, icon: WhatsAppIcon, color: "green" },
  { id: 2, icon: FacebookRoundedIcon, color: "blue" },
  { id: 3, icon: TwitterIcon, color: "#2196f3" },
  { id: 4, icon: PinterestIcon, color: "red" },
];

const ShopItem = () => {
  const isMediumScreen = useMediaQuery({ query: "(max-width: 900px)" });

  const { number } = useParams();
  const itemsData = useSelector(selectItems);
  const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

  const dispatch = useDispatch();
  const currentItem: IItem | undefined = itemsData?.find(
    (item: IItem) => item.id === Number(number)
  );

  const Images = [
    { id: 1, src: currentItem?.src },
    { id: 2, src: currentItem?.srcHover },
  ];
  const [image, setImage] = useState<string | undefined>(currentItem?.src);

  const handleChangeImage = () => {
    setImage(
      image === currentItem?.src ? currentItem?.srcHover : currentItem?.src
    );
  };

  const handleAddToCart = (currentItem: IItem | undefined) => {
    setDrawerOpen(true);
    dispatch(addToCart(currentItem));
  };

  const handleCloseCartDrawer = () => {
    setDrawerOpen(false);
  };
  return (
    <>
      <Grid container margin="3% auto" width="70%" spacing={4}>
        <Grid item lg={6} md={6} xs={12}>
          <Box width="100%" border="1px solid grey">
            <img
              src={image}
              alt="item"
              style={{ width: "80%", height: "70%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              width: "100%",
              margin:`${isMediumScreen ? "3% 0" : "3% 5%"}` ,
            }}
          >
            {Images.map((i: any) => (
              <Box key={i.id} mr={2} onClick={handleChangeImage}>
                {" "}
                <img
                  src={i?.src}
                  alt="item"
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "0.8px solid grey",
                  }}
                />
              </Box>
            ))}
          </Box>
          <Typography variant="body1" component="div" width="100%">
            I'm a product detail. I'm a great place to add more details about
            your product such as sizing, material, care instructions and
            cleaning instructions.
          </Typography>
        </Grid>
        <Grid item lg={5} md={5} xs={12}>
          <Typography variant="h5" component="div">
            EZ 0000{currentItem?.id}
          </Typography>
          <Typography variant="body2" component="div" mt={1}>
            SKU: 000{currentItem?.id}
          </Typography>
          <Typography variant="body1" component="div" mt={3} mb={3}>
            ${currentItem?.price}.00
          </Typography>

          <Button
            onClick={() => handleAddToCart(currentItem)}
            variant="contained"
            fullWidth
            style={{
              background: "#44DBBD",
              color: "white",
              marginBottom: "10px",
            }}
          >
            Add To Cart
          </Button>
          <Button
            variant="contained"
            fullWidth
            style={{
              background: "black",
              color: "white",
              marginBottom: "20px",
            }}
          >
            Buy Now
          </Button>
          <ItemAccordion />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              margin: "20px 12px",
            }}
          >
            {" "}
            {Icons.map((i: IIcons) => (
              <Box mr={1.5} key={i.id}>
                {<i.icon fontSize="small" sx={{ color: `${i.color}` }} />}
              </Box>
            ))}
          </Box>
        </Grid>
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

export default ShopItem;
