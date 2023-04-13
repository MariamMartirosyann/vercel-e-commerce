import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const MinimalLayout = () => {
  return (
    <Box>
      <Outlet />
    </Box>
  );
};

export default MinimalLayout;
