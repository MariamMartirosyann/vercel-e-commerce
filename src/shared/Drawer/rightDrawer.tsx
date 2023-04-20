import { ReactNode } from "react";
import { Box, Drawer, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "react-responsive";

const useStyles: any = makeStyles({
  cartNavbar: {
    width: "100%",
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    height: "100px",
    padding: "6% 4% ",
  },
    
});

export interface IRightDrawerProps {
  open: boolean;
  setOpen: (val: boolean) => void;
  title: string;
  children: ReactNode;
  onClose?: () => void;
}


const RightDrawer = ({
  open,
  setOpen,
  title,
  onClose,
  children,
}: IRightDrawerProps) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
    onClose?.();
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 699px)" });

  const SIDEBAR_WIDTH = 600;
  const SIDEBAR_WIDTH_SMALL = 350;
  return (
    <Drawer anchor={"right"} open={open} onClose={handleClose}>
      <Box width={isSmallScreen ?SIDEBAR_WIDTH_SMALL:SIDEBAR_WIDTH}>
        <Box mb={4} className={classes.cartNavbar}>
          <Typography variant="h6" ml="50%">{title}</Typography>
          <Box sx={{ cursor: "pointer" }}>
            <CloseIcon onClick={handleClose} />
          </Box>
        </Box>
        {children}
        
        <Box>  
         
        </Box>
      </Box>
    </Drawer>
  );
};

export default RightDrawer;
