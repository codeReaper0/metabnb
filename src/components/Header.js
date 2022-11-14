import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header className="max-w-[1240px] mx-auto py-10 flex justify-between items-center">
      <img src="/logo.png" alt="Metabnb" />
      <nav className="flex gap-12">
        <Link to="/" className="text-xl text-[#434343]">
          Home
        </Link>
        <Link to="/" className="text-xl text-[#434343]">
          Place to stay
        </Link>
        <Link to="/" className="text-xl text-[#434343]">
          NFTs
        </Link>
        <Link to="/" className="text-xl text-[#434343]">
          Community
        </Link>
      </nav>
      <Link
        to="/"
        type="button"
        className="text-white rounded-[10px] px-6 py-3 connect"
      >
        Connect wallet
      </Link>
    </header>
  );
};

export default Header;
