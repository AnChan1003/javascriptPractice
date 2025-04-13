const button = document.getElementById("button");
const pass = document.getElementById("pass");
const slider = document.getElementById("slider");
const sliderNum = document.getElementById("slider-num");

function showPassword() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const number = "123456789";
  const numbersCheck = document.getElementById("numbersCheck");
  const symbols = "!#$%&(){}[]";
  const symbolsCheck = document.getElementById("symbolsCheck");

  let password = "";
  let seed = alphabets + alphabets.toUpperCase();
  if (numbersCheck.checked) {
    seed += number;
  }

  if (symbolsCheck.checked) {
    seed += symbols;
  }

  for (let i = 0; i < slider.value; i++) {
    password += seed[Math.floor(Math.random() * seed.length)];
  }

  pass.textContent = password;
}

slider.addEventListener("input", () => {
  sliderNum.textContent = slider.value;
});

button.addEventListener("click", () => {
  showPassword();
});
