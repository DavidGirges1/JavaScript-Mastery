function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const mar = hours >= 12 ? "AM" : "PM";

  hours = hours % 12 || 12; // return 12 if the hour is falsy 0
  hours = hours.toString().padStart(2, 0);
  const minutes = now.getMinutes().toString().padStart(2, 0);
  const seconds = now.getSeconds().toString().padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds} ${mar}`;
  document.getElementById("clock").textContent = timeString;
}

setInterval(() => {
  updateClock();
}, 1000);
