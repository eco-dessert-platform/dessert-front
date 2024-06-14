interface Props {
  availableDays: {
    startDate: string;
    endDate: string;
  };
}

const dateFormatter = (date: string) => {
  const newDate = new Date(date).toLocaleDateString('ko-KR');
  return newDate;
};

const TypeOfDate = ({ availableDays: { startDate, endDate } }: Props) => (
  <div className="typo-title-14-regular text-gray-700">
    {dateFormatter(startDate)} ~ {dateFormatter(endDate)}
  </div>
);
export default TypeOfDate;
