import {Link} from "react-router-dom";
const Header = () => {
  return (
    <header className="max-w-[1240px] mx-auto py-10 flex justify-between">
      <img src="/logo.png" alt="Metabnb" />
      <nav>
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
    </header>
  );
};

export default Header;
