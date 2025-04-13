const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let startTime;
let timeoutID;
let runTime = 0;

function countUp() {
  const d = new Date(Date.now() - startTime + runTime);
  const m = String(d.getMinutes()).padStart(2, "0");
  const s = String(d.getSeconds()).padStart(2, "0");
  const ms = String(d.getMilliseconds()).padStart(3, "0");

  timer.textContent = `${m}:${s}.${ms}`;

  timeoutID = setTimeout(() => {
    countUp();
  }, 10);
}

function setButtonInitial() {
  start.classList.remove("inactive");
  stop.classList.add("inactive");
  reset.classList.add("inactive");
}
function setButtonRunning() {
  start.classList.add("inactive");
  stop.classList.remove("inactive");
  reset.classList.add("inactive");
}
function setButtonReset() {
  start.classList.remove("inactive");
  stop.classList.add("inactive");
  reset.classList.remove("inactive");
}

setButtonInitial();
start.addEventListener("click", () => {
  if (start.classList.contains("inactive")) {
    return;
  }
  setButtonRunning();
  startTime = Date.now();
  countUp();
});

stop.addEventListener("click", () => {
  if (stop.classList.contains("inactive")) {
    return;
  }
  setButtonReset();
  clearTimeout(timeoutID);
  runTime += Date.now() - startTime;
});

reset.addEventListener("click", () => {
  if (reset.classList.contains("inactive")) {
    return;
  }
  setButtonInitial();
  timer.textContent = "00:00.000";
  runTime = 0;
});
