import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import { aboutLinks, helpLinks, quickLinks } from "../data";

const socialMediaIcons = [
  { icon: faFacebookF, className: "" },
  { icon: faTwitter, className: "text-gray_600" },
  { icon: faPinterest, className: "text-gray_600" },
  { icon: faInstagram, className: "text-gray_600" },
  { icon: faYoutube, className: "text-gray_600" },
];

const FooterScreen: React.FC = () => {
  return (
    <div className="w-full max-w-[1610px] pt-10">
      <div className="py-[60px] flex md:flex-row flex-col lg:space-x-20  px-2.5">
        <div className="flex flex-col">
          <img
            src="/logo.png"
            alt="logo"
            className="w-[347px] h-[70px] object-cover"
          />
          <div className="pt-[14px] flex flex-row space-x-3">
            {socialMediaIcons.map((socialIcon, index) => (
              <button
                key={index}
                className={classNames(
                  "border w-[42px] h-[45px] rounded hover:shadow-md",
                  socialIcon.className === "" && "shadow-md"
                )}
              >
                <FontAwesomeIcon
                  icon={socialIcon.icon}
                  className={socialIcon.className}
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:pt-0 pt-10">
          <span className="text-[20px] leading-7 font-semibold capitalize">
            ouick links
          </span>
          <div className="pt-5 flex-col flex">
            {quickLinks.map((link, index) => (
              <span
                key={index}
                className="text-gray_300 text-base leading-[34px] cursor-pointer hover:text-black_300 "
              >
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:pt-0 pt-10">
          <span className="text-[20px] leading-7 font-semibold capitalize">
            About
          </span>
          <div className="pt-5 flex-col flex">
            {aboutLinks.map((link, index) => (
              <span
                key={index}
                className="text-gray_300 text-base leading-[34px] cursor-pointer hover:text-black_300 "
              >
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:pt-0 pt-10">
          <span className="text-[20px] leading-7 font-semibold capitalize">
            Help Centre
          </span>
          <div className="pt-5 flex-col flex">
            {helpLinks.map((link, index) => (
              <span
                key={index}
                className="text-gray_300 text-base leading-[34px] cursor-pointer hover:text-black_300  "
              >
                {link}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:pt-0 pt-10">
          <span className="text-[20px] leading-7 font-semibold capitalize">
            Our newsletter
          </span>
          <div className="pt-5 flex-col flex">
            <span className="text-gray_300 text-base leading-[34px] cursor-pointer hover:text-black_300  ">
              Subscribe to our newsletter to get
            </span>
            <span className="text-gray_300 text-base leading-[34px] cursor-pointer hover:text-black_300  ">
              updates about our grand offers.
            </span>
          </div>
          <div className=" mt-[29px] h-[47px] w-[333px] justify-between bg-[#F5F5F5]  flex rounded-[10px] ">
            <div className="border-y border-l w-full h-full pl-[15px] rounded-l-[10px] items-center flex">
              <input
                className="bg-[#F5F5F5] placeholder:text-[#A4A4A4] text-[15px] leading-5 w-full outline-none"
                placeholder="Enter your email-address"
              />
            </div>

            <button className="font-semibold text-sm leading-4 uppercase px-4 h-full bg-primary text-white hover:bg-green_200 rounded-r-[10px]">
              send
            </button>
          </div>
        </div>
      </div>
      <div className="border-t flex flex-col md:flex-row md:justify-between py-[30px] px-2.5">
        <span className="text-gray_300 text-base leading-[34px] font-sans ">
          © 2024 Organic. All rights reserved.
        </span>
        <span className="text-gray_300 text-base leading-[34px] font-sans ">
          Designed by <span className="font-bold">Templates Jungle </span>
        </span>
      </div>
    </div>
  );
};

export default FooterScreen;
