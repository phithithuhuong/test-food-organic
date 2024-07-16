"use client";
import { useState } from "react";
import { Product } from "../type";
import { Rate } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import classNames from "classnames";
type Props = {
  product: Product;
  onAddCart?: (product: Product) => void;
  onFavorite?: (product: Product) => void;
  rateColor: "yellow" | "green";
};
const ProductItem: React.FC<Props> = ({
  product,
  onAddCart,
  onFavorite,
  rateColor,
}) => {
  const [count, setCount] = useState<number>(1);
  const onMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const onAdd = () => {
    if (count < 99) {
      setCount(count + 1);
    }
  };

  return (
    <div className="hover:absolute hover:z-10 flex flex-col  group bg-white relative duration-200 hover:scale-[1.1] hover:shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)] rounded-[20px]">
      <div
        className={classNames(
          "p-2.5 items-center flex flex-col rounded-[20px]"
        )}
      >
        <div className="flex flex-col w-full ">
          <img
            src={product.image}
            alt={product.title}
            className="h-[210px] w-[230px] object-cover"
          />
          <span className="mt-2.5 text-base leading-[27px] self-start group-hover:px-2.5">
            {product.title}
          </span>
          <div className="mt-[5px] flex space-x-1.5 items-center group-hover:px-2.5">
            <span className="text-[15px] leading-[15px] font-semibold text-gray_700">
              ${product.price}.00
            </span>
            <span className="text-[17px] leading-[17px] font-semibold text-black_200">
              ${product.price_sale}.00
            </span>
            <div className="border-2 px-[7px] py-1 text-[13px] leading-[13px] text-gray_600 font-medium uppercase">
              {product.cent_sale}% off
            </div>
          </div>
          <div className="flex flex-row mt-[5px] items-center space-x-2.5 group-hover:px-2.5">
            <Rate
              allowHalf
              disabled
              defaultValue={product.star}
              style={{
                fontSize: "13px",
                color: rateColor === "yellow" ? "#FFC43F" : "#6BB252",
              }}
            />
            <span className="text-[15px] leading-4 text-gray_600 font-semibold">
              ({product.comments})
            </span>
          </div>
        </div>
        <div className="hidden group-hover:block pt-5 flex-col justify-center">
          <div className="w-full flex items-center justify-center">
            <div className="flex flex-row space-x-[3px] items-center">
              <button
                onClick={onMinus}
                className="w-[26px] h-[26px] items-center justify-center flex rounded-md border font-medium"
              >
                -
              </button>
              <button className="w-8 h-[26px] items-center justify-center flex rounded-md border text-[17px] leading-[17px] ">
                {count}
              </button>
              <button
                onClick={onAdd}
                className="w-[26px] h-[26px] items-center justify-center flex rounded-md border font-medium"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex space-x-2 pb-2.5 ">
            <button
              onClick={() => onAddCart!(product)}
              className="mt-5 border-black hover:bg-black hover:text-white flex rounded-[10px] border text-[13px] leading-[19px] font-semibold uppercase py-3 px-[17px] items-center space-x-2.5"
            >
              <FontAwesomeIcon icon={faCartPlus} /> <span>Add to Cart </span>
            </button>
            <button
              onClick={() => onFavorite!(product)}
              className="mt-5 border-black  hover:bg-black hover:text-white flex rounded-[10px] border text-[13px] leading-[19px] font-semibold uppercase py-3 px-[17px] items-center space-x-2.5"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
