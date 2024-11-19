import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const { loginWithEmail, signinWithGoogle } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEmail = e.target.email.value;
    const userPassword = e.target.password.value;
    loginWithEmail(userEmail, userPassword)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
    console.log("Logging in with", userEmail, userPassword);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white my-6 p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
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
              placeholder="Password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Log In
          </button>
        </form>
        <div className="divider">OR</div>
        <div className="w-fit mx-auto">
          <button
            onClick={signinWithGoogle} className="btn btn-circle mb-5 mx-auto">
            <FaGoogle className="text-blue-600 text-xl" />
          </button>
        </div>
        <hr className="border" />
        <div className="text-center mt-6">
          <p className="text-gray-600">Don&apos;t have an account?</p>
          <Link
            to="/register"
            className="text-blue-600 hover:underline"
          >
            Register Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
