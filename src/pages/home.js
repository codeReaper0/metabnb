import React from "react";
import "../index.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
// import {Link} from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Hero />
    </React.Fragment>
  );
};

export default Home;
