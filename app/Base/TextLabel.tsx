import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons/faArrowRight";
type Props = {
  label: string;
  isNextPage?: boolean;
  isNextPageCustom?: React.ReactNode;
  see_more?: string;
  button?: string;
};
const TextLabelBase: React.FC<Props> = ({
  label,
  isNextPage,
  see_more,
  button,
  isNextPageCustom,
}) => {
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="font-normal text-[32px] leading-[37px] whitespace-nowrap capitalize">
        {label}
      </div>
      <div className="flex items-center">
        {button && (
          <button className="uppercase px-5 py-[15px] text-white rounded-[10px] bg-primary hover:bg-green_200 text-base font-medium leading-4">
            {button || "View All"}
          </button>
        )}

        {see_more && (
          <div className="text-gray_400 text-base leading-[21px] font-semibold pr-[50px] hover:text-[#a6a5a5] hidden md:block ">
            <span className="text-gray_400 text-base leading-[21px] font-semibold cursor-pointer pr-2 hover:text-[#a6a5a5]">
              {see_more}
            </span>
            <FontAwesomeIcon
              icon={faArrowRight}
              fontSize={13}
              className="cursor-pointer"
            />
          </div>
        )}

        {isNextPageCustom
          ? isNextPageCustom
          : isNextPage && (
              <div className="flex space-x-3 justify-end">
                <button className="bg-[#F1F1F1]  rounded-[10px] w-[38px] h-[38px] hover:bg-[#f8f5f5] items-center justify-center flex">
                  <FontAwesomeIcon icon={faChevronLeft} fontSize={20} />
                </button>
                <button className="bg-primary rounded-[10px] w-[38px] h-[38px] hover:bg-green_200 items-center justify-center flex">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className=" text-white"
                    fontSize={20}
                  />
                </button>
              </div>
            )}
      </div>
    </div>
  );
};

export default TextLabelBase;
