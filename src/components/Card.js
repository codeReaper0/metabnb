const Card = (props) => {
  return (
    <div className="border border-[#d7d7d7] rounded-[15px] py-4 px-3 flex flex-col gap-3 relative">
      <img src={props.img} alt="adventure" />

      <div className="absolute top-8 right-7">
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.59964 2.6295L10 3.16463L10.4004 2.6295C11.3204 1.39971 12.7949 0.599976 14.44 0.599976C17.2315 0.599976 19.5 2.87378 19.5 5.68998C19.5 6.8256 19.3189 7.87372 19.0043 8.84606L19.0032 8.84932C18.249 11.236 16.7035 13.1596 15.0354 14.5933C13.365 16.0288 11.6004 16.9482 10.4589 17.3366L10.4589 17.3366L10.4536 17.3385C10.3537 17.3737 10.1893 17.4 10 17.4C9.81075 17.4 9.64625 17.3737 9.54641 17.3385L9.54642 17.3384L9.54106 17.3366C8.3996 16.9482 6.635 16.0288 4.96465 14.5933C3.29649 13.1596 1.75096 11.236 0.996763 8.84932L0.996774 8.84931L0.995722 8.84607C0.681141 7.87372 0.5 6.8256 0.5 5.68998C0.5 2.87378 2.76848 0.599976 5.56 0.599976C7.2051 0.599976 8.67958 1.39971 9.59964 2.6295Z"
            fill="#D7D7D7"
            stroke="url(#paint0_linear_9420_394)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_9420_394"
              x1="10"
              y1="17.9"
              x2="10"
              y2="0.0999756"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#1D0E3D" />
              <stop offset="1" stop-color="#0F051D" />
            </linearGradient>
          </defs>
        </svg>
      </div>

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
