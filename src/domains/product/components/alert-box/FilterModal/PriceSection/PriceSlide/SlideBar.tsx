interface SlideBarProps {
  left: number;
  right: number;
}

const SlideBar = ({ left, right }: SlideBarProps) => (
  <div className="relative my-[4px] w-full h-[12px] rounded-[50px] bg-blue-gray-50">
    <div
      className="absolute h-[12px] rounded-[50px] bg-primary-orange-red"
      style={{ left: `${left}%`, right: `${right}%` }}
    />
  </div>
);

export default SlideBar;
