"use client";
import { Drawer } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { Menu } from "@/app/data";

type Props = {
  open: boolean;
  onClose: () => void;
};

const Sidebar: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Drawer
      placement={"left"}
      closable={false}
      onClose={onClose}
      open={open}
      key={"left"}
      width={358}
    >
      <div className="px-[7px] py-[19px]">
        <div className="flex justify-between py-2.5 items-center">
          <span className=" uppercase text-[#999999] text-xs leading-[30px]">
            Menu
          </span>
          <FontAwesomeIcon
            icon={faXmark}
            className="text-base cursor-pointer"
            onClick={onClose}
          />
        </div>
        <div className="flex flex-col ">
          {Menu.map((item) => (
            <div
              key={Math.random()}
              className="p-2.5 mt-2.5 flex items-center border-b border-dashed space-x-2.5 h-[43px]"
            >
              {item.icon && (
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-6 h-6 object-contain"
                />
              )}
              {item.name && (
                <span className="text-[17px] leading-[42px]"> {item.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default Sidebar;
