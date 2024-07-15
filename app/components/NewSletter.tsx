import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NewSletterScreen: React.FC = () => {
  return (
    <div className="my-10 bg-[url('/bg_lala.png')] min-h-[324px] w-full  max-w-[1590px] bg-center bg-cover bg-no-repeat items-center flex justify-center text-white">
      <div className="max-w-[1041px] grid lg:grid-cols-2 gap-[70px] w-full p-10">
        <div className="flex flex-col">
          <span className="font-medium text-[38px] leading-10 capitalize flex flex-col">
            <span> Get 20% discount on</span>
            <span>your first purchase</span>
          </span>
          <span className="pt-[7px]">
            Just Sign Up & Register it now to become member.
          </span>
        </div>
        <div className="flex flex-col space-y-[14px]">
          <div className="px-5 py-2.5 flex bg-white border items-center space-x-3">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-[#C8C8C8] text-[16px]"
            />
            <input
              className="text-base leading-9 w-full outline-none placeholder:text-black text-black"
              placeholder="Email address"
            />
          </div>
          <button className="px-10 py-3 text-white font-semibold text-base leading-9 uppercase bg-primary hover:bg-green_200">
            Subscribe now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewSletterScreen;
