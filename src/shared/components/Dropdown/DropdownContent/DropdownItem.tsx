import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const DropdownItem = ({ children, onClick }: Props) => (
  <button
    className="hover:bg-red-gray-50 typo-body-12-regular h-full w-full bg-white p-[10px] text-center"
    type="button"
    onClick={onClick}
  >
    {children}
  </button>
);

export default DropdownItem;
