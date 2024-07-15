import React from "react";

const Search: React.FC = () => {
  return (
    <div className=" h-[47px] w-[500px] justify-between bg-[#F5F5F5]  flex rounded-[10px] ">
      <div className="border-y border-l w-full h-full pl-[15px] rounded-l-[10px] items-center flex">
        <input
          className="bg-[#F5F5F5] placeholder:text-[#A4A4A4] text-[15px] leading-5 w-full outline-none"
          placeholder="Search  products"
        />
      </div>

      <button className="font-semibold text-sm leading-4 uppercase px-4 h-full bg-primary text-white hover:bg-green_200 rounded-r-[10px]">
        search
      </button>
    </div>
  );
};

export default Search;
