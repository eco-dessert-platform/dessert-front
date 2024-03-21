interface SlideBarProps {
  left: number;
  right: number;
}

const SlideBar = ({ left, right }: SlideBarProps) => {
  return (
    <div className="relative my-[4px] w-full h-full rounded-[50px] bg-gray-200">
      <div
        className={'absolute h-full rounded-[50px] bg-primaryOrangeRed'}
        style={{ left: `${left}%`, right: `${right}%` }}
      ></div>
    </div>
  );
};

export default SlideBar;
