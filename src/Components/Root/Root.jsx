import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import LoginModal from "../LoginModal";
import { useContext } from "react";
import { ModalContext } from "../Provider/ModalProvider";
import { ToastContainer } from "react-toastify";

const Root = () => {
  const { isModalOpen, closeModal, navigateLink } = useContext(ModalContext);
  return (
    <div>
      <div className="sm:w-11/12 mx-auto">
        <Navbar />
        <div className="p-2">
          <Outlet />
        </div>
      </div>
      <LoginModal
        isOpen={isModalOpen}
        onClose={closeModal}
        navigateLink={navigateLink}
      />
      <Footer />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition:Zoom
      />
    </div>
  );
};

export default Root;
