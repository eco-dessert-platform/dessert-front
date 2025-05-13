interface Props {
  onClick: () => void;
}

const DeleteButton = ({ onClick }: Props) => (
  <button
    type="button"
    onClick={onClick}
    className="p-[6px] w-[70px] border-[1px] border-gray-200 rounded-[4px] text-center typo-body-12-medium text-gray-800"
  >
    삭제
  </button>
);

export default DeleteButton;
