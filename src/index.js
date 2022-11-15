import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Places from "./pages/places";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/places" element={<Places />}></Route>
    </Routes>
  </BrowserRouter>
);
reportWebVitals();
