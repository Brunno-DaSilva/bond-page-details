console.log("Ciao Bella, me piacere parlare italiano");
const top_Container = document.getElementById("container__top");

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
