import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "animate.css";

const DonationCard = ({ campaign }) => {
  const navigate = useNavigate();

  const handleDonateClick = () => {
    navigate(`/campaign/${campaign.id}`);
  };

  return (
    <div className="card bg-base-100 shadow-xl animate__animated animate__bounce">
      <figure>
        <img
          src={campaign.image}
          alt={campaign.title}
          className="rounded-t-lg w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-blue-600">{campaign.title}</h2>
        <p className="text-gray-700">{campaign.description}</p>
        <p className="text-gray-500">Division: {campaign.division}</p>
        <div className="card-actions justify-end">
          <button
            onClick={handleDonateClick}
            className="btn btn-primary w-full"
          >
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};
DonationCard.propTypes = {
  campaign: PropTypes.object.isRequired,
};
export default DonationCard;
