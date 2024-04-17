export const formatDate = (dateToFormat: number): string => {
  const currentDate = new Date(dateToFormat);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const dayOfWeek = daysOfWeek[currentDate.getDay()];
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();

  return `${dayOfWeek}, ${month} ${date}/${year}`;
};

export const formatTime = (timeToFormat: number): string => {
  const selectedDate = new Date(timeToFormat);

  let hour = selectedDate.getHours();
  const minute = selectedDate.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour;
  return `${hour}:${minute < 10 ? "0" + minute : minute}${ampm}`;
};
