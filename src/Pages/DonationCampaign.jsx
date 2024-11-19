import { useLoaderData } from "react-router-dom";
import DonationCard from "../Components/DonationCard";

const DonationCampaigns = () => {
  const donationCampaigns = useLoaderData();
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {donationCampaigns.map((campaign) => (
        <DonationCard key={campaign.id} campaign={campaign} />
      ))}
    </div>
  );
};
export default DonationCampaigns;
