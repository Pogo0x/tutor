document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-list");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});
