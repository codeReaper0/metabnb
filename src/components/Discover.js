const Card = (props) => {
  return (
    <section className="connect">
      <div className="max-w-[1240px] mx-auto py-10 px-5 sm:px-12 xl:px-0 flex flex-col sm:flex-row items-center gap-10 xl:gap-28">
        <div className="order-2 sm:order-1">
          <h3 className="font-bold text-3xl xl:text-5xl text-white mb-4 xl:mb-9">
            Metabnb NFTs
          </h3>
          <p className="text-lg text-white mb-9">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="px-8 py-[14px] bg-white rounded-lg text-[#a02279] mt-3 xl:mt-12">
            Learn more
          </button>
        </div>
        <img src="/nft.png" alt="NFT's" className="order-1 sm:order-2 w-1/2" />
      </div>
    </section>
  );
};

export default Card;
