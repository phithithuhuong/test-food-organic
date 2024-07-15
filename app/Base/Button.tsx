import classNames from "classnames";
import React from "react";
type Props = {
  label: string;
  color?: "primary" | "black";
  onClick?: () => void;
};
const ButtonRoundFull: React.FC<Props> = ({ label, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        "px-10 py-5 text-white rounded-full font-semibold text-[20px] leading-5",
        color === "primary" && "bg-primary hover:bg-green_200",
        color === "black" && "bg-black_200 hover:bg-black_100"
      )}
    >
      {label}
    </button>
  );
};

export default ButtonRoundFull;
