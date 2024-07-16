import React from "react";
import TextLabelBase from "../Base/TextLabel";
import { categories } from "../data";
import CardRadiusItem from "../Base/CardRadiusItem";

const CategoriesScreen = () => {
  return (
    <div className="max-w-[1600px] w-full my-10 items-center flex flex-col px-5">
      <TextLabelBase
        label={"Popular categories"}
        see_more="View All Categories"
        isNextPage={true}
      />
      <div className="mt-10  gap-10 max-w-[1600px] w-full lg:grid-cols-8 md:grid-cols-4 grid grid-cols-2">
        {categories.map((category) => (
          <CardRadiusItem
            key={Math.random()}
            label={category.name}
            img={category.image}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesScreen;
