import React from "react";
import "../index.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Adventure from "../components/Adventure";
import Discover from "../components/Discover";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Banner />
      <Adventure />
    </React.Fragment>
  );
};

export default Home;
