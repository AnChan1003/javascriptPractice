function check() {
  let countdown = endTime - new Date().getTime();

  if (countdown <= 0) {
    clearInterval(intervalID);
    countdown = 3 * 1000;
    button.disabled = false;
  }
  const totalSeconds = Math.floor(countdown / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesFormat = String(minutes).padStart(2, "0");
  const secondsFormat = String(seconds).padStart(2, "0");

  timer.textContent = `${minutesFormat}:${secondsFormat}`;
}

const timer = document.getElementById("timer");
const button = document.getElementById("btn");
let endTime;
let intervalID;

// 終了時刻
button.addEventListener("click", () => {
  endTime = new Date().getTime() + 3 * 1000;
  button.disabled = true;

  // 残り時間チェック
  intervalID = setInterval(check, 100);
});
