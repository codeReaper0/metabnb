const Card = (props) => {
  return (
    <section className="connect">
      <div className="max-w-[1240px] mx-auto py-10 flex items-center gap-28">
        <div>
          <h3 className="font-bold text-5xl text-white mb-9">Metabnb NFTs</h3>
          <p className="text-lg text-white mb-9">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="px-8 py-[14px] bg-white rounded-lg text-[#a02279] mt-12">
            Learn more
          </button>
        </div>
        <img src="/nft.png" alt="NFT's" />
      </div>
    </section>
  );
};

export default Card;
