function showPassword() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const numbersCheck = document.getElementById("numbersCheck");
  const numbers = "0123456789";
  const symbolsCheck = document.getElementById("symbolsCheck");
  const symbols = "!$%&(){}[]";
  let password = "";
  let seed = alphabets + alphabets.toUpperCase();

  if (numbersCheck.checked) {
    seed += numbers;
  }

  if (symbolsCheck.checked) {
    seed += symbols;
  }

  for (let i = 0; i < slider.value; i++) {
    password += seed[Math.floor(Math.random() * seed.length)];
  }
  pass.textContent = password;
}

const slider = document.getElementById("slider");
const sliderNum = document.getElementById("slider-num");
const button = document.getElementById("button");
const pass = document.getElementById("pass");

slider.addEventListener("input", () => {
  sliderNum.textContent = slider.value;
});

button.addEventListener("click", () => {
  showPassword();
});

showPassword();