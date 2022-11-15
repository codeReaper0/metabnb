const Card = (props) => {
  return (
    <div className="border border-[#d7d7d7] rounded-[15px] py-4 px-3 flex flex-col gap-3">
      <img src={props.img} alt="adventure" />
      <div className="flex justify-between items-center">
        <p className="text-xs text-[#434343]">Desert king</p>
        <p className="text-xs font-bold text-[#434343]">1MBT per night</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-xs text-[#434343]">2345km away</p>
        <p className="text-xs text-[#434343]">available for 2weeks stay</p>
      </div>
      <div className="flex gap-1">
        <img src="/star.png" alt="star" />
        <img src="/star.png" alt="star" />
        <img src="/star.png" alt="star" />
        <img src="/star.png" alt="star" />
        <img src="/star.png" alt="star" />
      </div>
    </div>
  );
};

export default Card;
