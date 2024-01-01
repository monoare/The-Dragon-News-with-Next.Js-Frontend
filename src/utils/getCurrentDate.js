export function getCurrentDate() {
  // Create a new Date object to get the current date and time
  const currentDate = new Date();

  // Get the day of the week (0-6, where 0 is Sunday and 6 is Saturday)
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = daysOfWeek[currentDate.getDay()];

  // Get the month (0-11, where 0 is January and 11 is December)
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[currentDate.getMonth()];

  // Get the day of the month (1-31)
  const dayOfMonth = currentDate.getDate();

  // Get the year (4 digits)
  const year = currentDate.getFullYear();

  // Display the information
  return `${dayOfWeek}, ${month}, ${dayOfMonth}, ${year}`;
}

// Call the function to display the current date
// getCurrentDate();
