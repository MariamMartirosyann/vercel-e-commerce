import { Box, Typography, Grid } from "@mui/material";
import { sectionTree } from "./sections";


const SectionThree = () => {

  return (
    <Grid container width="70%" spacing={5} m=" 80px auto">
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
          <Box
            sx={{
              border: "2px solid #44DBBD",
              borderRadius: "14px",
              padding: "10px",
              width: "70px",
              margin: " 15px auto",
            }}
          >
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
  );
};

export default SectionThree;
