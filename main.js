const openBtn = document.querySelector(".open_menu_btn");
const closeBtn = document.querySelector(".close_menu_btn");
const menu = document.querySelector(".group_items");

openBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
  document.body.classList.add("overlay");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("show");
  document.body.classList.remove("overlay");
});
