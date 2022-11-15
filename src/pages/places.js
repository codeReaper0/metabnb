import React from "react";
import "../index.css";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Stay from "../components/Stay";
import Footer from "../components/Footer";

const Places = () => {
  return (
    <div className="relative">
      <Header />
      <Modal />
      <Stay />
      <Footer />
    </div>
  );
};

export default Places;
