import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const [passwordErrorMessage, setPasswordErrorMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const { user, signUpWithEmail, signinWithGoogle } = useContext(AuthContext);

  const validatePassword = (password) => {
    return /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userPhoto = e.target.photoUrl.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    console.log(validatePassword(userPassword));
    if (validatePassword(userPassword)) {
      signUpWithEmail(userEmail, userPassword)
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: userName,
            photoURL: userPhoto,
          });
          setErrorMessage(null);
          navigate("/");
        })
        .catch((err) => {
          setErrorMessage(err.message);
        });
    } else {
      setPasswordErrorMessage(
        "Password must contain one uppercase, one lowercase and at least 6 character"
      );
    }

    console.log(
      "Registering with",
      userName,
      userEmail,
      userPhoto,
      userPassword
    );
  };
  const handleGoogleLogin = () => {
    signinWithGoogle();
    if (user) {
      navigate("/");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-blue-100">
        <div className="bg-white p-8 my-6 rounded-lg shadow-lg w-96">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
            Register
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoUrl"
                placeholder="Your Photo URL"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full"
                  required
                />
                <div
                  onClick={() => setShowPassword(!showPassword)}
                  className=""
                >
                  {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
                </div>
              </label>
            </div>
            {passwordErrorMessage && (
              <p className="text-sm text-red-600">{passwordErrorMessage}</p>
            )}

            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
            {errorMessage && (
              <p className="text-sm text-red-600">{errorMessage}</p>
            )}
          </form>
          <div className="divider">OR</div>
          <div className="w-fit mx-auto">
            <button
              onClick={handleGoogleLogin}
              className="btn btn-circle mb-5 mx-auto"
            >
              <FaGoogle className="text-blue-600 text-xl" />
            </button>
          </div>
          <hr className="border" />
          <div className="text-center mt-6">
            <p className="text-gray-600">Already have an account?</p>
            <Link to={"/login"} className="text-blue-600 hover:underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
