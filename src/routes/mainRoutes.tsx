import { Navigate } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Cart from "../pages/cart";
import Home from "../pages/home";
import Shop from "../pages/shop";
import ShopItem from "../pages/shopItem";
import { ERoutes } from "./constants";

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: ERoutes.HOME,
        element: <Home />,
      },
  
      {
        path: ERoutes.SHOP,
        element: <Shop />,
      },
      {
        path: ERoutes.SHOP_ITEM,
        element: <ShopItem />,
      },
      {
        path: ERoutes.CART,
        element: <Cart />,
      },
      {
        path: "*",
        element: <Navigate to={`/`} />,
      },
    ],
  },
];

export default MainRoutes;
