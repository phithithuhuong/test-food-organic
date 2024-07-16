import React from "react";
import TextLabelBase from "../Base/TextLabel";
import { CardPost } from "../data";
import CardPostItem from "../Base/CardPostItem";

const LatestArticles: React.FC = () => {
  return (
    <div className="w-full max-w-[1600px] flex flex-col items-center px-2.5 ">
      <TextLabelBase label="our latest articles" button="View All" />
      <div className="grid lg:grid-cols-3 lg:gap-x-[52px] pt-5 gap-y-[52px]">
        {CardPost.map((article) => (
          <CardPostItem item={article} key={Math.random()} />
        ))}
      </div>
    </div>
  );
};

export default LatestArticles;
