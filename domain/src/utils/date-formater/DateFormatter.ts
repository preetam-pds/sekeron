import constants from "../../constants/Constants";

export const formatDate = (date: any) => {
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  const newDate = day + "/" + month + "/" + year;
  return newDate;
};

export const currentDate = (data: any) => {
  const currentMonth = new Date().getUTCMonth() + 1;
  const currentDate =
    new Date().getUTCDate() +
    "/" +
    currentMonth +
    "/" +
    new Date().getUTCFullYear();
  return currentDate;
};

export const maximumDate = (date: any) => {
  let month = date.getUTCMonth() + 1;
  let day = date.getUTCDate();
  let year = date.getUTCFullYear() - constants.minimumAge;
  return {
    month,
    day,
    year,
  };
};

const dateFormatterUtils = { formatDate, currentDate, maximumDate };
export default dateFormatterUtils;
