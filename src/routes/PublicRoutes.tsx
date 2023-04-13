import MinimalLayout from "../layout/MinimalLayout";
import NotFoundView from "../pages/NotFoundView";


const PublicRoutes = [
  {
    path: "/",
    element: <MinimalLayout />,
    children: [
      { path: "404", element: <NotFoundView /> },
    ],
  },
];

export default PublicRoutes;
