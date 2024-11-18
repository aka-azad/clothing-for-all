// src/components/CampaignDetails.js
import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'animate.css'

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
    return <div className=" animate__animated animate__bounce">Campaign not found</div>;
  }

  return (
    <div className="max-w-[1200px] animate__animated animate__bounce mt-6 mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-4xl text-center font-bold mb-8 text-blue-600">
        {campaign.title}
      </h2>
      <div className="sm:grid md:grid-cols-2 gap-6 ">
        <div>
          <img
            src={campaign.image}
            alt={campaign.title}
            className="rounded-lg w-full max-h-96 object-cover mb-4"
          />
          <p className="text-gray-800 mb-4">{campaign.description}</p>
          <p className="text-gray-500">Division: {campaign.division}</p>
          <p className="text-gray-500">Status: {campaign.status}</p>
          <p className="text-gray-500">Contact: {campaign.contactInfo}</p>
        </div>
        <div className="">
          <h3 className="text-2xl text-center font-semibold mb-4 text-blue-600 ">
            Donation Form
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Quantity</label>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Item Type</label>
              <input
                type="text"
                value={itemType}
                onChange={(e) => setItemType(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Pickup Location</label>
              <input
                type="text"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Additional Notes</label>
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
