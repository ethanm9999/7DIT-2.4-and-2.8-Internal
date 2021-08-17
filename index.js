function formatDate(dateObject) {
  const parts = {
    date: dateObject.getDate(),
    month: dateObject.getMonth() + 1,
    year: dateObject.getFullYear(),
  };

  return `${parts.date}/${parts.month}/${parts.year}`
}

const dayJsObject = dayjs();

console.log(dayJsObject.format("D/M/YYYY"));
