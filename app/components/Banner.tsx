"use client";

import ButtonRoundFull from "../Base/Button";
import classNames from "classnames";
import { DataCard, DataCount } from "../data";
import CountUp from "react-countup";

const BannerScreen: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center px-5">
      <div className=" max-w-[1280px] w-full">
        <div className="pt-[122px] lg:w-[580px] text-[69px] leading-[82px] flex flex-col">
          <span>
            <span className="font-bold  text-primary">Organic</span> Foods
          </span>
          <span className="flex flex-col md:flex-row whitespace-nowrap">
            at your <span className="font-bold px-3"> Doorsteps</span>
          </span>
        </div>
        <div className="flex flex-row my-10 space-x-5">
          <ButtonRoundFull label="Start Shopping" color="primary" />
          <ButtonRoundFull label="Join us" color="black" />
        </div>
        <div className="py-5 flex md:space-x-5 flex-col md:flex-row">
          {DataCount.map((item, index) => (
            <div key={index} className="flex flex-row items-center space-x-2.5">
              <span className="font-bold text-[32px] leading-[38px]">
                <CountUp end={item.countUp as number} start={0} />
                K+
              </span>
              <div className="flex flex-col uppercase text-sm leading-4">
                <span>{item.des1} </span>
                <span>{item.des2}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="hidden lg:block">
          <div className="flex flex-col md:flex-row absolute bottom-0 left-1/2 transform -translate-x-1/2">
            {DataCard.map((item, index) => (
              <div
                key={index}
                className={classNames(
                  `flex flex-row w-[426px] bg-[${item.color}] text-white p-5 space-x-5`,
                  item.label_color === "orange" && "bg-[#F95F09]",
                  item.label_color === "black" && "bg-[#364127]",
                  item.label_color === "green" && "bg-[#6BB252]"
                )}
              >
                <img
                  src={item.icon}
                  alt=""
                  className="w-[48px] h-[50px] object-contain"
                />
                <div className="flex flex-col">
                  <span className="text-[24px] leading-[33px] font-semibold">
                    {item.label}
                  </span>
                  <span className="text-base leading-[26px] font-sans">
                    {item.des}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerScreen;
