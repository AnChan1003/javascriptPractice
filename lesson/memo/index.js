const text = document.querySelector("textarea");
const keep = document.getElementById("keep");
const trash = document.getElementById('trash');
const message = document.getElementById("message");

if(localStorage.getItem('memo') === null) {
text.value = '';
} else {
  text.value = localStorage.getItem('memo');
}

keep.addEventListener("click", () => {
  message.classList.add("active");
  setTimeout(() => {
    message.classList.remove("active");
  }, 1000);
  localStorage.setItem("memo", text.value);
});

trash.addEventListener('click', () => {
  if(confirm('削除しますか？') === true) {
  text.value = '';
  localStorage.removeItem('memo');
  };
})
