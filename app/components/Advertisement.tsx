import React from "react";

const AdvertisementScreen: React.FC = () => {
  return (
    <div className="w-full max-w-[1600px] flex lg:flex-row flex-col py-10 lg:space-x-[30px] text-white px-5">
      <div className="bg-[url('/bg1.png')] min-h-[560px] lg:w-[900px] bg-cover bg-top bg-no-repeat flex flex-col justify-center p-10">
        <span className="font-semibold text-[40px] leading-[56px]">
          Items on SALE
        </span>
        <span className="py-2.5  text-2xl leading-7 font-sans">
          Discounts up to 30%
        </span>
        <button className="text-[17px] leading-5 self-start uppercase border-b-2 hover:bg-white hover:text-black hover:border-white rounded-sm">
          shop now
        </button>
      </div>
      <div className="flex flex-col space-y-[30px] mt-[30px] lg:mt-0 ">
        <div className="bg-[url('/bg2.png')] min-h-[265px] lg:w-[670px] bg-cover bg-center bg-no-repeat flex flex-col justify-center p-10">
          <span className="font-semibold text-[40px] leading-[56px]">
            Combo offer
          </span>
          <span className="py-2.5  text-2xl leading-7 font-sans capitalize">
            save up to 100%
          </span>
          <button className="text-[17px] leading-5 self-start uppercase border-b-2 hover:bg-white hover:text-black hover:border-white rounded-sm">
            shop now
          </button>
        </div>
        <div className="bg-[url('/bg3.png')] min-h-[265px] lg:w-[670px]  bg-cover bg-center bg-no-repeat flex flex-col justify-center p-10">
          <span className="font-semibold text-[40px] leading-[56px]">
            Discount Coupons
          </span>
          <span className="py-2.5  text-2xl leading-7 font-sans">
            Discounts up to 30%
          </span>
          <button className="text-[17px] leading-5 self-start uppercase border-b-2 hover:bg-white hover:text-black hover:border-white rounded-sm">
            shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertisementScreen;
