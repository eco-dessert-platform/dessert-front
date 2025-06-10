interface SlideBarProps {
  left: number;
  right: number;
}

const SlideBar = ({ left, right }: SlideBarProps) => (
  <div className="bg-blue-gray-50 relative my-[4px] h-[12px] w-full rounded-[50px]">
    <div
      className="bg-primary-orange-red absolute h-[12px] rounded-[50px]"
      style={{ left: `${left}%`, right: `${right}%` }}
    />
  </div>
);

export default SlideBar;
