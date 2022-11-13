import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Contact from "./components/contact";
import Home from "./components/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
