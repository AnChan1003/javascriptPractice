"use strict";

{
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const overlay = document.querySelector(".overlay");

  open.addEventListener("click", () => {
    overlay.classList.add("show");
    open.classList.add("hidden");
  });
  close.addEventListener("click", () => {
    overlay.classList.remove("show");
    open.classList.remove("hidden");
  });
}
