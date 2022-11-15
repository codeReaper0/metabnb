import React from "react";
import "../index.css";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Adventure from "../components/Adventure";
import Discover from "../components/Discover";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="relative">
      <Header />
      <Modal />
      <Hero />
      <Banner />
      <Adventure />
      <Discover />
      <Footer />
    </div>
  );
};

export default Home;
