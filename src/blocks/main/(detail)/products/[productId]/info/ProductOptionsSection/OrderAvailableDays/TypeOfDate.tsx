interface Props {
  availableDays: {
    startDate: string;
    endDate: string;
  };
}

const TypeOfDate = ({ availableDays: { startDate, endDate } }: Props) => {
  const formatedStartDate = new Date(startDate).toLocaleDateString('ko-KR');
  const formatedEndDate = new Date(endDate).toLocaleDateString('ko-KR');

  return (
    <div className="typo-title-14-regular text-gray-700">
      {formatedStartDate} ~ {formatedEndDate}
    </div>
  );
};
export default TypeOfDate;
