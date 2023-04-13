import { useMediaQuery } from "react-responsive";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import BannerSecond from "../../../images/paralax.png";

const useStyles: any = makeStyles({
  paralax: {
    position: "relative",
    backgroundImage: `url(${BannerSecond})`,
    width: "100%",
    height: "120vh",
    boxSizing: "border-box",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    paddingBottom: "20px",
  },
  smallParalax: {
    position: "relative",
    width: "100%",
    height: "100vh",
    boxSizing: "border-box",
    paddingBottom: "20px",
  },
  paralaxText: {
    width: "40%",
    marginLeft: "20%",
    position: "absolute",
    right: 0,
    top: "10%",
  },
  smallParalaxText: {
    width: "100%",
    position: "absolute",
    marginLeft: "15%",
    top: 0,
  },

  paralaxPoints: {
    marginBottom: "20px",
    display: "flex",
    flexDirection: "row",
  },
  arrow: {
    margin: "10px",
  },
});

const textItems = [
  { id: 1, text: "Download the EZ app to your smart phone" },
  { id: 2, text: "Connect EZ to your Internet router" },
  {
    id: 3,
    text: "Add your electronic devices and control your home enviroment from anywhere",
  },
];
const SectionTwo = () => {
  const classes = useStyles();

  const isBigScreen = useMediaQuery({ query: "(min-width: 1400px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1050px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 699px)" });

  return (
    <Box className={isSmallScreen ? classes.smallParalax : classes.paralax}>
      <Box
        className={
          isSmallScreen ? classes.smallParalaxText : classes.paralaxText
        }
      >
        <Typography
          variant={isLargeScreen ? "h3" : "h4"}
          component="div"
          mt={10}
        >
          HOW
        </Typography>
        <Typography variant={isLargeScreen ? "h3" : "h4"} component="div">
          IT WORKS
        </Typography>
        <Typography
          variant="body1"
          component="div"
          width={isBigScreen ? "45%" : "60%"}
          mt={3}
          mb={3}
        >
          Synchronising your home devices and managing them from your smartphone
          has never been so EZ
        </Typography>
        {textItems.map((i) => (
          <Box className={classes.paralaxPoints} key={i.id}>
            <span className={classes.arrow}>
              <ArrowForwardIosIcon fontSize="small" color="primary" />
            </span>
            <Typography
              variant="body1"
              component="div"
              width={isBigScreen ? "35%" : "60%"}
            >
              {i.text}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SectionTwo;
