import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root/Root";
import Home from "../Pages/Home";
import DonationCampaigns from "../Pages/DonationCampaign";
import CampaignDetails from "../Components/CampaignDetails";

const routes = createBrowserRouter([
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
        element: <CampaignDetails />,
        loader: () => fetch("/campaigns.json"),
      },
    ],
  },
]);

export default routes;
