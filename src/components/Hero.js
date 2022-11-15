const Hero = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-5 lg:py-10 px-5 sm:px-12 xl:px-0 flex flex-col sm:flex-row items-center gap-5 lg:gap-9 xl:gap-24 h-max mb-7">
      <div className="space-y-4 xl:space-y-10 sm:w-[57%] order-2 sm:order-1">
        <h1 className="text-4xl xl:text-[56px] xl:leading-[56px]">
          Rent a <span className="font-bold text-[#A02279]">Place</span> away
          from <span className="font-bold text-[#A02279]">Home</span> in the
          <span className="font-bold text-[#A02279]"> Metaverse</span>
        </h1>
        <p className="text-base xl:text-2xl">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <div className="w-full flex">
          <input
            for="search"
            type="text"
            placeholder="Search for location"
            className="h-10 lg:h-12 xl:h-[54px] placeholder:text-sm border border-[#a3a3a3] rounded-l-lg px-4 w-3/5"
          />
          <button className="rounded-r-lg bg-[#a02279] border border-[#a02279] h-10 sm:h-12 xl:h-[54px] text-center w-2/5 text-white">
            Search
          </button>
        </div>
      </div>
      <div className="sm:w-[42%] flex gap-2 sm:h-[250px] lg:h-[320px] xl:h-[450px] order-1 sm:order-2">
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
