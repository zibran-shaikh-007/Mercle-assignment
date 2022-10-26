enum STATUS {
  PENDING = "Pending",
  CLAIMED = "Claimed",
}

export const formatDate = (date: Date) => {
  let monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();
  return `${monthNames[monthIndex]} ${day} ${year}`;
};

export const handleStatusBackground = (status: String) => {
  if (status === STATUS.PENDING) return "#DB312B";
  if (status === STATUS.CLAIMED) return "#4C9610";
  return "#1A63F4";
};
