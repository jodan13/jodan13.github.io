"use strict";

//  Индекс слайда по умолчанию
let slideIndex = 1;
showSlides(slideIndex);

//  Функция увеличивает индекс на 1, показывает следующй слайд
function plusSlide() {
  showSlides((slideIndex += 1));
}

//  Функция уменьшяет индекс на 1, показывает предыдущий слайд
function minusSlide() {
  showSlides((slideIndex -= 1));
}

//  Устанавливает текущий слайд
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// Основная функция сладера
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("portfolio__item");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "flex";
}

const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute("href").substr(1);

    document.getElementById(blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
}
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach(item => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});
