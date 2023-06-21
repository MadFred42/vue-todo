export const convertDate = (dateToConvert: Date = new Date()) => {
  const [date] = dateToConvert.toISOString().split('T');

  return date;
};
