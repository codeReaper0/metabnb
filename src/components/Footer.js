const Card = (props) => {
  return (
    <section className="bg-[#1D1D1E]">
      <div className="max-w-[1240px] mx-auto py-10 flex gap-40">
        <div className="flex flex-col justify-between">
          <img src="/logo_footer.png" alt="logo" />

          <div className="flex gap-8 items-center">
            <img src="/facebook.svg" alt="logo" />
            <img src="/instagram.svg" alt="logo" />
            <img src="/twitter.svg" alt="logo" />
          </div>

          <p className="text-white">&copy; 2022 Metabnb</p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Community</h4>
          <div className="gap-4 flex flex-col">
            <a href="/" className="text-white text-sm ">
              NFT
            </a>
            <a href="/" className="text-white text-sm ">
              Tokens
            </a>
            <a href="/" className="text-white text-sm ">
              Landlords
            </a>
            <a href="/" className="text-white text-sm ">
              Discord
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">Places</h4>
          <div className="gap-4 flex flex-col">
            <a href="/" className="text-white text-sm ">
              Castle
            </a>
            <a href="/" className="text-white text-sm ">
              Farms
            </a>
            <a href="/" className="text-white text-sm ">
              Beach
            </a>
            <a href="/" className="text-white text-sm ">
              Learn More
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6">About us</h4>
          <div className="gap-4 flex flex-col">
            <a href="/" className="text-white text-sm ">
              Road map
            </a>
            <a href="/" className="text-white text-sm ">
              Creators
            </a>
            <a href="/" className="text-white text-sm ">
              Career
            </a>
            <a href="/" className="text-white text-sm ">
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
