const button = document.getElementById("btn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const omikuji = ["吉", "中吉", "大吉"];
  const n = Math.floor(Math.random() * omikuji.length);
  result.textContent = omikuji[n];
});
