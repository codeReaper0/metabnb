const Hero = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-10 flex items-center   gap-24 h-max">
      <div className="space-y-10 w-[57%]">
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
        <div className="w-full flex">
          <input
            for="search"
            type="text"
            placeholder="Search for location"
            className="h-[54px] placeholder:text-sm border border-[#a3a3a3] rounded-l-lg px-4 w-3/5"
          />
          <button className="rounded-r-lg bg-[#a02279] border border-[#a02279] h-[54px] text-center w-2/5 text-white">
            Search
          </button>
        </div>
      </div>
      <div className="w-[42%] flex gap-2 h-[450px]">
        <div className="flex flex-col gap-2 justify-end">
          <img src="/hero1.png" alt="Hero Images" />
          <img src="/hero2.png" alt="Hero Images" />
        </div>
        <div className="flex flex-col gap-2 justify-start">
          <img src="/hero1.png" alt="Hero Images" />
          <img src="/hero2.png" alt="Hero Images" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
