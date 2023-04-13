import { Box } from "@mui/material";

import { Outlet } from "react-router-dom";
import Footer from "../shared/footer";

import Navbar from "../shared/navbar";

const MainLayout = (): JSX.Element => {
  return (
    <Box>
      <Navbar />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default MainLayout;
