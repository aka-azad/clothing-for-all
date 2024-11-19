import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaign";
import CampaignDetails from "../Components/CampaignDetails";
import ErrorPage from "../Components/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard";
import BypassToHomeRoute from "./BypassHomeRoute";
import ResetPassword from "../Pages/ResetPassword";
import UpdateProfile from "../Pages/UpdateProfile";

const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root></Root>,
      children: [
        { path: "/", element: <Home /> },
        {
          path: "donation-campaigns",
          element: <DonationCampaigns />,
          loader: () => fetch("/campaigns.json"),
        },
        {
          path: "campaign/:id",
          element: (
            <PrivateRoute>
              <CampaignDetails />
            </PrivateRoute>
          ),
          loader: () => fetch("/campaigns.json"),
        },
        {
          path: "login",
          element: (
            <BypassToHomeRoute>
              <Login />
            </BypassToHomeRoute>
          ),
        },
        {
          path: "register",
          element: (
            <BypassToHomeRoute>
              <Register />
            </BypassToHomeRoute>
          ),
        },
        {
          path: "dashboard",
          element: (
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          ),
        },
        {
          path: "reset-password",
          element: <ResetPassword />,
        },
        {
          path: "update-profile",
          element: <UpdateProfile />,
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

export default routes;
