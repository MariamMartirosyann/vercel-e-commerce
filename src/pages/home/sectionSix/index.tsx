import { useNavigate } from "react-router";
import { useMediaQuery } from "react-responsive";
import LastBanner from "../../../images/lastBanner.webp";
import { Box, Typography, Button } from "@mui/material";

const SectionSix = () => {
  const navigate = useNavigate();

  const isMediumScreen = useMediaQuery({ query: "(max-width: 1300px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });

  const navigateToShop = () => {
    return navigate("/shop");
  };

  return (
    <Box
      sx={{
        position: "relative",
      }}
      mt={15}
    >
      <img src={LastBanner} alt="last banner" width="100%" />
      <Box
        sx={{
          position: "absolute",
          top: `${isSmallScreen ? "5%" : "20%"}`,
          left: "12%",
          width: `${isSmallScreen ? "85%" : "40%"}`,
        }}
      >
        <Typography
          variant={isMediumScreen ? "h6" : "h3"}
          component="div"
          width="45%"
        >
          LIFE IS EZ
        </Typography>
        <Typography
          variant="body1"
          component="div"
          width={isSmallScreen ? "80%" : "48%"}
          margin="5% 0"
        >
          Your home is well prepared for your return, perfectly set to whatever
          makes you most comfortable
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "primary",
            color: "white",
            width: `${!isSmallScreen ? "45%" : "80%"}`,
          }}
          onClick={navigateToShop}
        >
          BUY NOW
        </Button>
      </Box>
    </Box>
  );
};

export default SectionSix;
