import { useRoutes } from "react-router-dom";
import MainRoutes from "./mainRoutes";
import PublicRoutes from "./PublicRoutes";


const Routes = () => {

  const routes:any =[...MainRoutes, ...PublicRoutes]
   

  return useRoutes(routes);
};

export default Routes;
