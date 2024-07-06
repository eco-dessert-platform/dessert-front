interface Props {
  availableDays: {
    startDate: string;
    endDate: string;
  };
}

const TypeOfDate = ({ availableDays: { startDate, endDate } }: Props) => {
  const formattedStartDate = new Date(startDate).toLocaleDateString('ko-KR');
  const formattedEndDate = new Date(endDate).toLocaleDateString('ko-KR');

  return (
    <div className="typo-title-14-regular text-gray-700">
      {formattedStartDate} ~ {formattedEndDate}
    </div>
  );
};
export default TypeOfDate;
