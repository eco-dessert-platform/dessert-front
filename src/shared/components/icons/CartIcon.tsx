interface Props {
  className?: string;
}

const CartIcon = ({ className }: Props) => (
  <svg
    className={className}
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M7 7H9.14L11.08 18.08H21.35L23.33 10.5H10.03"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.25 23.1C13.05 23.1 13.7 22.45 13.7 21.65C13.7 20.85 13.05 20.2 12.25 20.2C11.45 20.2 10.8 20.85 10.8 21.65C10.8 22.45 11.45 23.1 12.25 23.1Z"
      fill="currentColor"
    />
    <path
      d="M20.9 23.1C21.7 23.1 22.35 22.45 22.35 21.65C22.35 20.85 21.7 20.2 20.9 20.2C20.1 20.2 19.45 20.85 19.45 21.65C19.45 22.45 20.1 23.1 20.9 23.1Z"
      fill="currentColor"
    />
  </svg>
);

export default CartIcon;
