import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { FaGoogle } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();
  const { signUpWithEmail, signinWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userName = e.target.name.value;
    const userPhoto = e.target.photoUrl.value;
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    signUpWithEmail(userEmail, userPassword).then(() =>
      updateProfile(auth.currentUser, {
        displayName: userName,
        photoURL: userPhoto,
      })
    );
    console.log(
      "Registering with",
      userName,
      userEmail,
      userPhoto,
      userPassword
    );
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white p-8 my-6 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
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
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
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
              name="password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
        <div className="divider">OR</div>
        <div className="w-fit mx-auto">
          <button
            onClick={signinWithGoogle}
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
  );
};

export default Register;
