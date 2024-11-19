import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <span className="loading loading-spinner loading-lg flex item-center mx-auto"></span>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} />;
};
PrivateRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoute;
