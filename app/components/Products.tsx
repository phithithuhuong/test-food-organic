import React from "react";
import TextLabelBase from "../Base/TextLabel";
import { products } from "../data";
import ProductItem from "../Base/ProductItem";

const ProductsScreen: React.FC = () => {
  return (
    <div className="max-w-[1600px] w-full px-2.5">
      <div className="py-[30px]">
        <TextLabelBase label="Freshly arrived" button="View All" />
      </div>
      <div className="my-10 lg:grid-cols-6 md:grid-cols-4 grid grid-cols-2 gap-[30px] ">
        {products.map((product) => (
          <ProductItem
            product={product}
            key={Math.random()}
            rateColor="yellow"
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsScreen;
