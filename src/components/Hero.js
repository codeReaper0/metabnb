const Hero = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-10 flex justify-between items-center">
      <div className="space-y-10">
        <h1 className="text-[56px]">
          Rent a <span className="font-bold text-[#A02279]">Place</span> away
          from <span className="font-bold text-[#A02279]">Home</span> in the
          <span className="font-bold text-[#A02279]"> Metaverse</span>
        </h1>
        <p className="text-2xl">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div>
          <input for="search" type="text" />
          <label></label>
        </div>
      </div>
    </section>
  );
};

export default Hero;
