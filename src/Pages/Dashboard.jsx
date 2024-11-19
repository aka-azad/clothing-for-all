import { Link } from "react-router-dom";
import auth from "../firebase/firebase.config";

const Dashboard = () => {
  const user = auth.currentUser;
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl font-bold text-left text-blue-600 mb-6">
          Welcome
        </h2>
        <h2 className="text-4xl font-bold text-end text-blue-600 mb-6">
          {user.displayName}!
        </h2>
        <div className="text-center mb-6">
          <img
            src={user.photoURL}
            alt="User Photo"
            className="w-32 h-32 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-700 text-xl">{user.displayName}</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
        <Link to="/update-profile" className="btn btn-primary w-full">
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
