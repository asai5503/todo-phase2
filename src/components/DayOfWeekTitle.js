const DayOfWeekTitle = () => {
  const dt = new Date();
  const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const now = week[dt.getDay()];

  return (
    <h1>{now}</h1>
  );
};

export default DayOfWeekTitle;