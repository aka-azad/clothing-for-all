// src/components/CampaignDetails.js
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CampaignDetails = () => {
  const { id } = useParams();
  const campaigns = useLoaderData();
  const campaign = campaigns.find((camp) => camp.id === parseInt(id));
  const [quantity, setQuantity] = useState("");
  const [itemType, setItemType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! We will reach your destination soon.");
    setQuantity("");
    setItemType("");
    setPickupLocation("");
    setNotes("");
  };

  if (!campaign) {
    return <div>Campaign not found</div>;
  }

  return (
    <div className="max-w-[1200px]  mx-auto p-6 bg-white rounded-lg shadow-lg">
      <ToastContainer />
      <h2 className="text-4xl text-center font-bold mb-4 text-blue-600">
        {campaign.title}
      </h2>
      <img
        src={campaign.image}
        alt={campaign.title}
        className="rounded-lg w-full h-96 object-cover mb-4"
      />
      <p className="text-gray-800 mb-4">{campaign.description}</p>
      <p className="text-gray-500">Division: {campaign.division}</p>
      <p className="text-gray-500">Status: {campaign.status}</p>
      <p className="text-gray-500">Contact: {campaign.contactInfo}</p>

      <h3 className="text-2xl text-center font-semibold mb-4 text-blue-600 mt-6">
        Donation Form
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Item Type</label>
          <input
            type="text"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="input input-bordered w-full"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Additional Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="textarea textarea-bordered w-full"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CampaignDetails;
