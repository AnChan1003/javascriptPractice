const button = document.getElementById("button");
const result = document.getElementById("result");

button.addEventListener("click", () => {
  const omikuji = ["大吉", "中吉", "吉"];
  const n = Math.floor(Math.random() * omikuji.length);
  result.textContent = omikuji[n];

  // switch (n) {
  //   case 0:
  //     result.textContent = "大吉";
  //     break;
  //   case 1:
  //     result.textContent = "中吉";
  //     break;
  //   case 2:
  //     result.textContent = "吉";
  //     break;
  // }
});

// button.addEventListener("click", () => {
//   const omikuji = ["大吉", "中吉", "吉"];
//   result.textContent = omikuji[Math.floor(Math.random() * omikuji.length)];
// });
