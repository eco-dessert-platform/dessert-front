import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const DropdownItem = ({ children, onClick }: Props) => (
  <button
    className="hover:bg-redGray-50 bg-white w-full text-center  p-[10px] h-full typo-body-12-regular"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default DropdownItem;
