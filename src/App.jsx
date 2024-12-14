import { RouterProvider, createBrowserRouter } from "react-router-dom";

import FrontPage from "./FrontPage";
import AddDepartment from "./AddDepartment";
import LandingPage from "./LandingPage";
import PageExample from "./PageExample";
import DeptExample from "./DeptExample";
import ToDepartment from "./ToDepartment";
import ToProduct from "./Toproduct";
import Product from "./Product";
import AddProduct from "./AddProduct";
import ToAccount from "./ToAccount";
import Account from "./Account";
import AddAccount from "./AddAccount";
import ToBrand from "./ToBrand";
import Brand from "./Brand";
import AddBrand from "./AddBrand";
import NewUser from "./NewUser";

const router = createBrowserRouter([
  {
    path: "/",
    element: <FrontPage />,
  },
  {
    path: "/new-user",
    element: <NewUser />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
    children: [
      {
        index: true,
        element: <PageExample />,
      },
      {
        path: "department",
        element: <ToDepartment />,
        children: [
          {
            index: true,
            element: <DeptExample />,
          },
          {
            path: "add-department",
            element: <AddDepartment />,
          },
        ],
      },
      {
        path: "product",
        element: <ToProduct />,
        children: [
          {
            index: true,
            element: <Product />,
          },
          {
            path: "add-product",
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "account",
        element: <ToAccount />,
        children: [
          {
            index: true,
            element: <Account />,
          },
          {
            path: "add-account",
            element: <AddAccount />,
          },
        ],
      },
      {
        path: "brand",
        element: <ToBrand />,
        children: [
          {
            index: true,
            element: <Brand />,
          },
          {
            path: "add-brand",
            element: <AddBrand />,
          },
        ],
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
