type Props = {
  img: string;
  label: string;
};
const CardRadiusItem: React.FC<Props> = ({ img, label }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src={img}
        alt="Img"
        className="w-[160px] h-[160px] rounded-full object-cover transition duration-300 ease-in-out"
      />
      <span className="mt-5 text-base leading-5 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default CardRadiusItem;
