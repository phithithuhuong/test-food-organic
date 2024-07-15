import React from "react";
import TextLabelBase from "../Base/TextLabel";
import { products } from "../data";
import ProductItem from "../Base/ProductItem";

const ProductsSellingScreen: React.FC = () => {
  return (
    <div className="w-full max-w-[1600px] py-10 px-2.5 lg:px-0">
      <TextLabelBase label="Best selling products" isNextPage={true} />
      <div className="my-10 lg:grid-cols-6 md:grid-cols-4 grid grid-cols-2 md:gap-5 lg:gap-[30px] ">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={Math.random()}
            rateColor="green"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSellingScreen;
