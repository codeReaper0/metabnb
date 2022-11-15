const Stay = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-10">
      <div className="flex">
        <a href="/" className="text-xl text-[#434343]">
          Resturant
        </a>
        <a href="/" className="text-xl text-[#434343]">
          Cottage
        </a>
        <a href="/" className="text-xl text-[#434343]">
          Castle
        </a>
        <a href="/" className="text-xl text-[#434343]">
          Fantasy city
        </a>
        <a href="/" className="text-xl text-[#434343]">
          Beach
        </a>
        <a href="/" className="text-xl text-[#434343]">
          Carbins
        </a>
        <a href="/" className="text-xl text-[#434343]">
          Off-grid
        </a>
        <a href="/" className="text-xl text-[#434343]">
          Farm
        </a>

        <div className="relative">
          <select
            name=""
            id=""
            className="border border-[#b4b4b4] h-12 w-[161px] rounded-lg pl-4"
          >
            <option selected disabled>
              Location
            </option>
          </select>
          <div className="absolute right-1 top-3 bg-white px-5">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.9999 5L10.9999 5"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99985 5H1.99985"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9999 12H16.9999"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.9999 12H1.99985"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.9999 19H10.9999"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.99985 19H1.99985"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9999 21V17"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.9999 7V3"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.0001 14V10"
                stroke="#333333"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stay;
