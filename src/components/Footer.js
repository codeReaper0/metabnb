const Card = (props) => {
  return (
    <section className="bg-[#1D1D1E]">
      <div className="max-w-[1240px] mx-auto py-10 px-5 xl:px-0 flex flex-col xl:flex-row gap-6 xl:gap-40">
        <div className="flex flex-col justify-between gap-9 xl:gap-0 order-2 xl:order-1">
          <img src="/logo_footer.png" alt="logo" className="w-40 xl:w-auto" />

          <div className="flex gap-8 items-center">
            <img src="/facebook.svg" alt="logo" />
            <img src="/instagram.svg" alt="logo" />
            <img src="/twitter.svg" alt="logo" />
          </div>

          <p className="text-white">&copy; 2022 Metabnb</p>
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-40 order-1 xl:order-2">
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
      </div>
    </section>
  );
};

export default Card;
