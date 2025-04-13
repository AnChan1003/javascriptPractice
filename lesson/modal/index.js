"use strict";

{
  const open = document.querySelector("#open");
  const mask = document.querySelector("#mask");
  const modal = document.querySelector("#modal");
  const close = document.querySelector("#close");

  open.addEventListener("click", () => {
    mask.classList.remove("hidden");
    modal.classList.remove("hidden");
  });

  close.addEventListener("click", () => {
    mask.classList.add("hidden");
    modal.classList.add("hidden");
  });

  mask.addEventListener("click", () => {
    close.click();
  });
}
