const main = document.querySelector("main");
const section = document.createElement("section");
main.appendChild(section);

const quizResult = (quiz) => {
  const heading = document.createElement("h2");
  section.appendChild(heading);
  heading.textContent = quiz[0];
  const ul = document.createElement("ul");
  section.appendChild(ul);
  let li0 = document.createElement("li");
  ul.appendChild(li0);
  li0.textContent = quiz[1];
  li0.addEventListener("click", () => {
    if (quiz[4] === 0) {
      li0.classList.add("correct");
    } else {
      li0.classList.add("wrong");
    }
  });
  let li1 = document.createElement("li");
  ul.appendChild(li1);
  li1.textContent = quiz[2];
  li1.addEventListener("click", () => {
    if (quiz[4] === 1) {
      li1.classList.add("correct");
    } else {
      li1.classList.add("wrong");
    }
  });
  let li2 = document.createElement("li");
  ul.appendChild(li2);
  li2.textContent = quiz[3];
  li2.addEventListener("click", () => {
    if (quiz[4] === 2) {
      li2.classList.add("correct");
    } else {
      li2.classList.add("wrong");
    }
  });
};

const quizes = [
  ["1の正解は？", "選択肢 A", "選択肢 B", "選択肢 C", 0],
  ["2の正解は？", "選択肢 A", "選択肢 B", "選択肢 C", 1],
  ["3の正解は？", "選択肢 A", "選択肢 B", "選択肢 C", 2],
];

quizes.forEach((quiz) => {
  quizResult(quiz);
});