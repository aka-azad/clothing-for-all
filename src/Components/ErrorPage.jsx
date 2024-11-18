import { Link, useLocation } from "react-router-dom";

const ErrorPage = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-lg text-center">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <p className="text-2xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </p>
        <p className="text-gray-500 mt-2">
          Oops! The page you are looking for doesn&apos;t exist.
        </p>
        <p className="text-gray-500 mt-2">
          Error: No match for <code>{location.pathname}</code>
        </p>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
