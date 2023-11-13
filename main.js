//Nav Scroll BackgroundColor Transition
const nav = document.getElementById("myNav");
// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 80) {
//     nav.classList.add("navbarScrolled");
//   } else {
//     nav.classList.remove("navbarScrolled");
//   }
// };

// Another way
window.addEventListener("scroll", () => {
  nav.classList.toggle("navbarScrolled", window.scrollY > 80);
});

//Show/Hide faq answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) =>
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //Change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "uil uil-plus") {
      icon.className = "uil uil-minus";
    } else {
      icon.className = "uil uil-plus";
    }
  })
);

const Menu = document.querySelector(".nav__menu");
const closeBtn = document.querySelector("#close-menu-btn");
const openBtn = document.querySelector("#open-menu-btn");
openBtn.addEventListener("click", () => {
  Menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  openBtn.style.display = "none";
});
const closeNav = () => {
  Menu.style.display = "none";
  openBtn.style.display = "inline-block";
  closeBtn.style.display = "none";
};
closeBtn.addEventListener("click", closeNav);
