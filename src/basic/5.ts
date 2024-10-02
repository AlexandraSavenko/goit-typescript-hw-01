enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
const isWeekend = (day): boolean => {
  if (day !== "Saturday" || day !== "Sunday") {
    return false;
  } else {
    return true;
  }
};
