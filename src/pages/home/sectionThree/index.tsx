
import { Box, Typography, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles"
import { sectionTree } from "./sections";

const useStyles: any = makeStyles({
    iconItem: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
    },
    sectionThreeIcon: {
      border: "2px solid #44DBBD",
      borderRadius: "14px",
      padding: "10px",
      width: "70px",
      margin: " 15px auto",
    },
    btn: {
      background: "primary",
      color: "white",
      width: "45%",
    },
    
  });

const SectionThree = () => {
    const classes = useStyles();
  return (
    <Grid
    container
    width="70%"
    spacing={5}
    m=" 80px auto"
  >
    {sectionTree.map((i) => (
      <Grid
        item
        key={i.id}
        lg={4}
        md={6}
        xs={12}
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Box className={classes.sectionThreeIcon}>
          {<i.icon color="primary" />}
        </Box>
        <Typography mt={2} mb={2}>
          {i.title}
        </Typography>
        <Typography component="div" width="70%" m="auto">
          {i.text}
        </Typography>
      </Grid>
    ))}
  </Grid>
  )
}

export default SectionThree