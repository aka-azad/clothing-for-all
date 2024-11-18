import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default routes;
