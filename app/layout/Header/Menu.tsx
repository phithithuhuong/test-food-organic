"use client";
import { useState } from "react";

const Menu: React.FC = () => {
  const menuData: string[] = ["Home", "Sale", "Stores", "About", "Contact"];
  const [activeKey, setActiveKey] = useState<string>(menuData[0]);

  return (
    <div className="flex flex-row">
      {menuData.map((item, index) => (
        <button
          key={index}
          className={` hidden lg:block px-5 text-sm leading-4 hover:text-gray-600 uppercase font-medium h-full ${
            activeKey === item
              ? "border-[#364127] border-b-[3px]"
              : "text-gray_900"
          }`}
          onClick={() => setActiveKey(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Menu;
