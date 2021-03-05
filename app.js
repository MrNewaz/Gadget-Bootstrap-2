const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 50) {
    nav.classList.add("navbar-dark", "bg-info");
    nav.classList.remove("navbar-light");
  } else {
    nav.classList.remove("navbar-dark", "bg-info");
    nav.classList.add("navbar-light");
  }
});
