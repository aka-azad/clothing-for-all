import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";

const Root = () => {
  return (
    <div>
      <div className="sm:w-11/12 mx-auto">
        <Navbar />
        <div className="p-2">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
