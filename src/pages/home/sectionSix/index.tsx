import { useMediaQuery } from "react-responsive";
import LastBanner from "../../../images/lastBanner.webp";
import { makeStyles } from "@mui/styles";
import { Box, Typography, Button} from "@mui/material";



const useStyles: any = makeStyles({
    btn: {
      background: "primary",
      color: "white",
      width: "45%",
    },
    btnSmall: {
      background: "primary",
      color: "white",
      width: "80%",
    },
    lastSection: {
      position: "relative",
    },
    lastSectiontext: {
      position: "absolute",
      top: "20%",
      left: "12%",
      width: "40%",
    },
    lastSectiontextSmall: {
      position: "absolute",
      top: "5%",
      left: "12%",
      width: "85%",
    }
  });

const SectionSix = () => {

    const classes = useStyles();

    const isMediumScreen = useMediaQuery({ query: "(max-width: 1300px)" });
    const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  return (
    <Box className={classes.lastSection} mt={15}>
        <img src={LastBanner} alt="last banner" width="100%" />
        <Box className={isSmallScreen ? classes.lastSectiontextSmall : classes.lastSectiontext}>
          <Typography variant={isMediumScreen ? "h6" : "h3"}  component="div" width="45%">
            LIFE IS EZ
          </Typography>
          <Typography variant="body1" component="div" width={isSmallScreen ? "80%" : "48%"} margin="5% 0">
            Your home is well prepared for your return, perfectly set to
            whatever makes you most comfortable
          </Typography>
          <Button variant="contained" className={isSmallScreen ? classes.btnSmall : classes.btn}>
            BUY NOW
          </Button>
        </Box>
      </Box>
  )
}

export default SectionSix