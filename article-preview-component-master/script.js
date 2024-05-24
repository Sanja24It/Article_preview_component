"use strict";
const icon_share = document.querySelector(".icon_share");
const icon = document.querySelector(".icon");
const icon2 = document.querySelector(".icon2");
const avatar_section = document.querySelector(".avatar");
const share_div = document.querySelector(".share_div ");
const avatar_info = document.querySelector(".avatar_info ");
const rotate = document.querySelector(".rotate ");

icon_share.addEventListener("click", function () {
  share_div.style.display = "flex";
  share_div.classList.add("share_pos");
  rotate.classList.add("rotate_lg");
  avatar_section.classList.add("dark");
  avatar_info.classList.add("hidden");
  avatar_info.classList.add("visible");
  icon_share.classList.add("icon_fill");
  icon.style.display = "none";
  icon2.classList.remove("hidden");
});
