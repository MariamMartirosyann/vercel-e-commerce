import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router";
import { makeStyles } from "@mui/styles";
import { Typography, Button, Grid} from "@mui/material";
import Banner from "../../../images/banner.webp";

const useStyles: any = makeStyles({
  banner: {width: "80%", height: "80%" },
  bannerSmall: {
    marginTop:"80px",
    marginLeft:"15%",
    width: "70%",
    height: "70%",
  },
});

const SectionOne = () => {
  
  const classes = useStyles();
  const navigate = useNavigate();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1050px)" });
  const isMediumScreen = useMediaQuery({ query: "(max-width: 900px)" });

  const navigateToShop = () => {
    return navigate("/shop");
  };

  return (
    <Grid container spacing={2} mt={2}>
      <Grid
        item
        lg={6}
        md={6}
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        
      >
        <Typography
          variant={isLargeScreen ? "h3" : "h5"}
          component="div"
          width={isBigScreen ? "45%" : "60%"}
          mt={isMediumScreen ? 0: 10}
        >
          YOUR HOME.
        </Typography>
        <Typography
          variant={isLargeScreen ? "h3" : "h5"}
          component="div"
          width={isBigScreen ? "45%" : "60%"}
        >
          SMARTER.
        </Typography>

        <Typography
          variant="body1"
          component="div"
          width={isBigScreen ? "45%" : "60%"}
          mt={7}
          mb={3}
        >
          Control your home enviroment from the palm of your hand with EZ
        </Typography>

        <Typography
          variant="body1"
          component="div"
          width={isBigScreen ? "45%" : "60%"}
          mb={6}
        >
          <u>Learn More </u>
        </Typography>
        <Button
          variant="contained"
          style={{
            color: "white",
            background: "primary",
            width: `${isBigScreen ? "45%" : "60%"}`,
          }}
          onClick={navigateToShop}
        >
          BUY NOW
        </Button>
      </Grid>
      <Grid item lg={6} md={6} xs={12} mt={5}>
        <img src={Banner} alt="banner" className={isBigScreen? classes.banner : classes.bannerSmall} />
      </Grid>
    </Grid>
  );
};

export default SectionOne;
