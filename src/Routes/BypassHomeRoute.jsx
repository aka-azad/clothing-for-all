import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const BypassToHomeRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return children;
  }

  return <Navigate to={"/"} />;
};
BypassToHomeRoute.propTypes = {
  children: PropTypes.element,
};
export default BypassToHomeRoute;
