import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const LoginModal = ({ isOpen, onClose, navigateLink }) => {
  const { loginWithEmail, signinWithGoogle } = useContext(AuthContext);
  const [errorMassage, setErrorMassage] = useState(null);

  const navigate = useNavigate();
  const validatePassword = (password) =>
    /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    if (validatePassword(userPassword)) {
      loginWithEmail(userEmail, userPassword)
        .then(() => {
          setErrorMassage(null);
          onClose();
          navigate(navigateLink);
        })
        .catch((err) => console.log(err));
      console.log("Logging in with", userEmail, userPassword);
      // onClose();
      // navigate(navigateLink);
    } else {
      setErrorMassage(
        "Password must contain one uppercase, one lowercase and at least 6 character"
      );
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="modal-box relative bg-white p-8 rounded-lg shadow-lg">
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-600">
              Login
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-full">
                Log In
              </button>
              {errorMassage && (
                <p className="text-sm text-red-600">{errorMassage}</p>
              )}
            </form>
            <div className="divider">OR</div>
            <div className="w-fit mx-auto">
              <button
                onClick={() => {
                  signinWithGoogle().then(() => {
                    onClose(), navigate(navigateLink);
                  });
                }}
                className="btn btn-circle mb-3 mx-auto"
              >
                <FaGoogle className="text-blue-600 text-xl" />
              </button>
            </div>
            <hr className="border" />
            <div className="text-center mt-4">
              <p className="text-gray-600">Don&apos;t have an account?</p>
              <Link
                onClick={onClose}
                to="/register"
                className="text-blue-600 hover:underline"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

LoginModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  navigateLink: PropTypes.string,
};
export default LoginModal;
