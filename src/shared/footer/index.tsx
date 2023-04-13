import {
  Box,
  Button,
  Grid,
  SvgIconTypeMap,
  TextField,
  Typography,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import SubscriptionsRoundedIcon from "@mui/icons-material/SubscriptionsRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import { makeStyles } from "@mui/styles";
import { OverridableComponent } from "@mui/material/OverridableComponent";

const useStyles: any = makeStyles({
  // btn: {
  //   marginTop: "10%",
  //   background: "primary",
  //   color: "white",
  //   width: "45%",
  // },
  subscrption: {
    display: "flex",
    flexDirection: "column",
  },
  lastPart: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    fontSize: "8px",
    color: "grey",
  },
  icons: {
    display: "flex",
    flexDirection: "row",
    color: "grey",
  },
});

interface IFooterIcon {
  id: number;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
}

const footerIcons: IFooterIcon[] = [
  { id: 1, icon: FacebookRoundedIcon },
  { id: 2, icon: SendRoundedIcon },
  { id: 3, icon: SubscriptionsRoundedIcon },
  { id: 4, icon: TwitterIcon },
];

const Footer = () => {
  const classes = useStyles();
  return (
    <Box p="5% 10%">
      <Grid container spacing={5}>
        <Grid item lg={4} md={6} xs={12}>
          <Typography variant="h6" component="div">
            ABOUT US
          </Typography>
          <Typography variant="body1" component="div"  mt={3} mb={3}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font. Feel free to drag and drop me
            anywhere.
          </Typography>
          <Box className={classes.icons}>
            {footerIcons.map((i: IFooterIcon) => (
              <Box mr={1.5} key={i.id}>
                {<i.icon fontSize="small" />}
              </Box>
            ))}
          </Box>
        </Grid>
        <Grid item lg={4} md={6} xs={12}>
          <Typography variant="h6" component="div">
            NEW RELEASES
          </Typography>
          <Typography variant="body1" component="div"  mt={3} mb={3}>
            I'm a paragraph. Click here to add your own text and edit me. It’s
            easy. Just click “Edit Text” or double click me to add your own
            content and make changes to the font.
          </Typography>
        </Grid>
        <Grid
          item
          lg={4}
          md={6}
          xs={12}
          style={{ display: "flex", flexDirection: "column" }}
        >
          <Typography variant="h6" component="div">
            Subscrption
          </Typography>

          <Box width="100%" mt={3} mb={2}>
            <TextField
              label="Email"
              helperText="Enter Your Email Here *"
              variant="outlined"
              fullWidth
              color="primary"
              size="small"
            />
          </Box>
          <Button
            variant="contained"
           // className={classes.btn}
            fullWidth
            style={{
              background: "#44DBBD",
              color: "white",
            
            }}
          >
            Subscription Now
          </Button>
        </Grid>
        <Box className={classes.lastPart} mt={5}>
          © 2035 BY EZ ELECTRONICS. Powered and secured by Wix
        </Box>
      </Grid>
    </Box>
  );
};

export default Footer;
