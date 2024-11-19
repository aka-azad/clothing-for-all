import { useContext, useState } from "react";
import { AuthContext } from "../Components/Provider/AuthProvider";
import { EmailContext } from "../Components/Provider/EmailProvider";

const ResetPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const { emailValue, setEmailValue } = useContext(EmailContext);
  const [message, setMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email)
      .then(() => {
        setMessage("An Email sent to your email account.");
        window.location.href = "https://mail.google.com";
      })
      .catch((err) => {
        console.log(err.message);
        setMessage("Provided Email is not valid");
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-100">
      <div className="bg-white my-6 p-8 rounded-lg shadow-lg w-96">
        <form onSubmit={handleSubmit} className="space-y-4 mb-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              placeholder="Enter your Email"
              className="input input-bordered w-full"
              required
            />
          </div>
          {<p className="text-sm text-blue-500">{message}</p>}
          <button type="submit" className="btn btn-primary w-full">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
