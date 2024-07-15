import { Peoples } from "../data";

const PeopleLooking: React.FC = () => {
  return (
    <div className="w-full max-w-[1600px] flex flex-col px-2.5">
      <span className="text-[32px] leading-[38px]">
        People are also looking for
      </span>
      <div className="flex flex-wrap gap-[15px] pt-5">
        {Peoples.map((item) => (
          <button
            key={Math.random()}
            className="bg-green_50 text-gray_500 px-3 py-2.5 rounded-[10px]"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PeopleLooking;
