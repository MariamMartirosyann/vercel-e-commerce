import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";

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
  search:{
    width:"100%",
    position:"relative"
  },
  find: {
    display: "flex",
    flexDirenction: "row",
  },
  findAnimation: {
   // position:"absolute",
    //bottom:0,
    width:"100%",
    //left:"10%",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    flexDirenction: "row",
    border: "1px solid blue",
    padding: "5px 10px 0 0",
    //visibility:"hidden"
  },
});

const Support = () => {
  const classes = useStyles();
  const [showSearchAnimation, setShowSearchAnimation] =
    useState<boolean>(false);

  const isLargeScreen = useMediaQuery({ query: "(min-width: 1050px)" });

  const handleSearch = () => {
    setShowSearchAnimation(true);
  };
  const handleSearchClose = () => {
    setShowSearchAnimation(false);
  };
  return (
    <>
      <Box className={classes.title}>
        <Box className={classes.titleBox}>
          <Typography variant={isLargeScreen ? "h4" : "h6"} component="div">
            GET
          </Typography>
          <Typography variant={isLargeScreen ? "h4" : "h6"} component="div">
            SUPPORT
          </Typography>
        </Box>
      </Box>
      <Grid container sx={{ width: "70%", margin: "20px auto" }}>
        <Grid item lg={6} md={6} xs={12}>
          <Box >
            {showSearchAnimation?  <Box className={classes.findAnimation}>
              <SearchIcon
                sx={{ color: "grey", margin: "auto 10px" }}
                onClick={handleSearch}
              />{" "}
             
              <TextField
                defaultValue="Looking for something"
                variant="standard"
                fullWidth
                size="small"
                InputProps={{
                  disableUnderline: true,
                }}
              />{" "}
                <CloseIcon
                sx={{ color: "grey", margin: "auto 10px" }}
                onClick={handleSearchClose}
              />{" "}
            </Box>:  <Box className={classes.find}>
              <Typography
                variant="body2"
                component="div"
                style={{
                  width: "90%",
                  display: "flex",
                  justifyContent: "center",
                  color: "#44DBBD",
                }}
              >
                Frequently asked questions
              </Typography>
              <SearchIcon sx={{ color: "grey" }} onClick={handleSearch} />
            </Box>}
           
           
          </Box>
        </Grid>
        <Grid item lg={6} md={6} xs={12}></Grid>
      </Grid>
    </>
  );
};

export default Support;
