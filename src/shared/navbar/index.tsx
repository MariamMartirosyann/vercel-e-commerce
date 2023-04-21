import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { ERoutes } from "../../routes/constants";
import { selectCartItems } from "../../app/redux/slices/cartSlice";
import { ICartItem } from "../../app/redux/interface";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

const navItems = [
  { text: "Home", path: ERoutes.HOME, haseBadge: false },
  { text: "Shop", path: ERoutes.SHOP, haseBadge: false },
  { text: "Cart", path: ERoutes.CART, haseBadge: true },
];

export default function DrawerAppBar(props: Props) {
  const { window } = props;
  const cartItemsData = useSelector(selectCartItems);

  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const totalQuantity = useMemo(() => {
    const quantity = cartItemsData.map((i: ICartItem) => {
      return i.itemQuantity;
    });
    const sum = quantity.reduce((a, b) => a + b, 0);

    return sum;
  }, [cartItemsData]);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        EZ
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                to={item.path}
                style={{ textDecoration: "none", color: "black" }}
              >
                {item.haseBadge ? (
                  <Badge badgeContent={totalQuantity} color="primary" showZero>
                    <ListItemText primary={item.text} />
                  </Badge>
                ) : (
                  <ListItemText primary={item.text} />
                )}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" color="secondary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              color: "white",
              marginLeft: "100px",
            }}
          >
            <Box
              sx={{
                border: "1px solid white",
                borderRadius: "5px",
                width: "40px",
                height: "35px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {" "}
              EZ
            </Box>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item.path} sx={{ color: "#fff" }}>
                <Link
                  to={item.path}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {item.haseBadge ? (
                    <Badge
                      badgeContent={totalQuantity}
                      color="primary"
                      showZero
                    >
                      {item.text}
                    </Badge>
                  ) : (
                    <>{item.text}</>
                  )}
                </Link>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          color="secondary"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}
