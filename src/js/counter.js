const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const OFFER_DAYS = 30;

function createEndDate() {
  const date = new Date();
  date.setDate(date.getDate() + OFFER_DAYS);

  const time = date.getTime();
  localStorage.setItem("driftOfferEnd", time);

  return time;
}

let endDate = Number(localStorage.getItem("driftOfferEnd"));

if (!endDate || endDate <= Date.now()) {
  endDate = createEndDate();
}

function updateCounter() {
  let distance = endDate - Date.now();

  if (distance <= 0) {
    endDate = createEndDate();
    distance = endDate - Date.now();
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysElement.textContent = String(days).padStart(2, "0");
  hoursElement.textContent = String(hours).padStart(2, "0");
  minutesElement.textContent = String(minutes).padStart(2, "0");
  secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCounter();
setInterval(updateCounter, 1000);
