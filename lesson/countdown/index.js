function check() {
  let countdown = endTime - new Date().getTime();

  // ③タイマーを終了
  if (countdown < 0) {
    clearInterval(intervalID);
    countdown = 3 * 1000;
    btn.disabled = false;
    btn.classList.remove('inactive');
  };

  const totalSeconds = Math.floor(countdown / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const minutesFormat = String(minutes).padStart(2, '0');
  const secondsFormat = String(seconds).padStart(2, '0');

  timer.textContent = `${minutesFormat}:${secondsFormat}`;
}

const timer = document.getElementById("timer");
const btn = document.getElementById("btn");
let endTime;
let intervalID;

// ①終了時刻を求める（クリックしたときに取得する）
btn.addEventListener("click", () => {
  endTime = new Date().getTime() + 3 * 1000;
  btn.disabled = true;
  btn.classList.add('inactive');
  // ②残り時間を求める
  intervalID = setInterval(check, 100);
});


