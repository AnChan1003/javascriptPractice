const lists = document.querySelectorAll(".menu li a");
const contents = document.querySelectorAll(".content");
lists.forEach((list) => {
  list.addEventListener("click", (e) => {
    e.preventDefault();

    lists.forEach((list) => {
      list.classList.remove("active");
    });
    list.classList.add("active");

    contents.forEach((content) => {
      content.classList.remove("active");
    });

    document.getElementById(list.dataset.id).classList.add("active");
  });
});
