import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
  function displayModal() {
    const modal = document.getElementById("modal");
    if (modal.style.display === "none") {
      modal.style.display = "block";
    } else {
      modal.style.display = "none";
    }
  }
  return (
    <header className="max-w-[1240px] mx-auto py-10 flex justify-between items-center">
      <img src="/logo.png" alt="Metabnb" />
      <nav className="flex gap-12">
        <Link to="/" className="text-xl text-[#434343]">
          Home
        </Link>
        <Link to="/places" className="text-xl text-[#434343]">
          Place to stay
        </Link>
        <Link to="/" className="text-xl text-[#434343]">
          NFTs
        </Link>
        <Link to="/" className="text-xl text-[#434343]">
          Community
        </Link>
      </nav>
      <button
        className="text-white rounded-[10px] px-6 py-3 connect"
        onClick={displayModal}
      >
        Connect wallet
      </button>
    </header>
  );
};

export default Header;
