import AddData from "../pages/addData";
import Basket from "../pages/basket";
import Detail from "../pages/detail";
import Home from "../pages/home";
import Root from "../pages/root";

export const routers = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
      {
        path: "/addData",
        element: <AddData />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
];
