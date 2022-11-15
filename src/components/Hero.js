const Hero = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-5 lg:py-10 px-5 xl:px-0 flex flex-col xl:flex-row items-center gap-5 xl:gap-24 h-max mb-7">
      <div className="space-y-4 lg:space-y-10 xl:w-[57%] order-2 lg:order-1">
        <h1 className="text-4xl lg:text-[56px]">
          Rent a <span className="font-bold text-[#A02279]">Place</span> away
          from <span className="font-bold text-[#A02279]">Home</span> in the
          <span className="font-bold text-[#A02279]"> Metaverse</span>
        </h1>
        <p className="text-base lg:text-2xl">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="w-full flex">
          <input
            for="search"
            type="text"
            placeholder="Search for location"
            className="h-10 lg:h-[54px] placeholder:text-sm border border-[#a3a3a3] rounded-l-lg px-4 w-3/5"
          />
          <button className="rounded-r-lg bg-[#a02279] border border-[#a02279] h-10 lg:h-[54px] text-center w-2/5 text-white">
            Search
          </button>
        </div>
      </div>
      <div className="xl:w-[42%] flex gap-2 xl:h-[450px] order-1 lg:order-2">
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
