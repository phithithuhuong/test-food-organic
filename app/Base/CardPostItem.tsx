import { CartItem } from "../type";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faFolder } from "@fortawesome/free-regular-svg-icons";
type Props = {
  item: CartItem;
};

const CardPostItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="max-w-[500px] w-full">
      <img
        src={item.img}
        alt={item.title}
        className="w-[498px] h-[240px] object-cover"
      />
      <div className="p-[30px] flex flex-col border">
        <div className=" pt-2.5 flex items-center text-[#828282] font-base leading-9 space-x-5 ">
          <div className="flex space-x-2 items-center  ">
            <FontAwesomeIcon icon={faCalendar} />
            <span>{item.date}</span>
          </div>
          <div className="flex space-x-2 items-center  ">
            <FontAwesomeIcon icon={faFolder} />
            <span>Health</span>
          </div>
        </div>
        <span className="font-semibold text-[20px] leading-[29px]">
          {item.title}
        </span>
        <span className="py-2.5 text-[17px] leading-[25px] text-gray_300">
          {item.description}
        </span>
        <button className="border-b-2 border-[#111111] hover:border-[#6a6868] hover:text-[#6a6868] text-[15px] leading-[18px] font-semibold uppercase self-start">
          Read more
        </button>
      </div>
    </div>
  );
};

export default CardPostItem;
