
import { useMediaQuery } from "react-responsive";
import { Box, Typography } from "@mui/material";
import ParalaxSecond from "../../../images/secondParalax.png";



const SectionFour = () => {

  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  
  return (
    <Box sx={{
      position: "relative",
      backgroundImage: `url(${ParalaxSecond})`,
      width: "100%",
      height: "100vh",
      boxSizing: "border-box",
      backgroundAttachment: "fixed",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      paddingBottom: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <Typography
        variant={isSmallScreen ? "h5" : "h3"}
        component="div"
        color="white"
      >
        FINE CURVES
      </Typography>
    </Box>
  );
};

export default SectionFour;
