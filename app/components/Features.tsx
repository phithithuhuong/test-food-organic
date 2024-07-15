import { Features } from "../data";

const FeaturesScreen: React.FC = () => {
  return (
    <div className="w-full max-w-[1600px] py-10 px-2.5">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 place-items-center ">
        {Features.map((item) => (
          <div
            className="w-[304px] h-[196px] px-[30px] py-5 border flex flex-col"
            key={Math.random()}
          >
            <img
              src={item.icon}
              alt={item.icon}
              className="w-[48px] object-contain"
            />
            <span className="text-[21px] leading-[25px] font-semibold py-2.5">
              {item.title}
            </span>
            <span className="text-gray_300 text-base ">{item.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesScreen;
