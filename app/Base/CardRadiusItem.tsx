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
        className="w-[160px] h-[160px] rounded-full object-cover hover:z-10 duration-200 hover:scale-[1.1] "
      />
      <span className="mt-5 text-base leading-5 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

export default CardRadiusItem;
