interface Props {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className="typo-body-12-medium w-[70px] rounded-[4px] border border-gray-200 p-[6px] text-center text-gray-800"
  >
    삭제
  </button>
);

export default DeleteButton;
