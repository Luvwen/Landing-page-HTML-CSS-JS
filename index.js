const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navMenuItems = document.querySelectorAll(".nav-menu-item");
const linksNav = document.querySelectorAll(".nav-menu-link");
const navToggleX = document.querySelector(".nav-toggle-x");

// Nav button

navToggle.addEventListener("click", () => {
  if (navMenu.classList.contains("nav-menu_visible")) {
    navMenu.classList.remove("nav-menu_visible");
  } else {
    navMenu.classList.add("nav-menu_visible");
  }
  navToggle.classList.add("nav-dissapear");
  navToggleX.classList.add("nav-appear");
});

// Toggle nav with nav button X

navToggleX.addEventListener("click", () => {
  if (navMenu.classList.contains("nav-menu_visible")) {
    navMenu.classList.remove("nav-menu_visible");
  } else {
    navMenu.classList.add("nav-menu_visible");
  }
  navToggleX.classList.remove("nav-appear");
  navToggle.classList.toggle("nav-dissapear");
});

// Icon button swap

linksNav.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    navMenu.classList.remove("nav-menu_visible");
    navToggleX.classList.toggle("nav-appear");
    navToggle.classList.toggle("nav-dissapear");
  });
});

const iconContainer = document.getElementById("icon-container");
const iconTheme = document.getElementById("icon-theme");
const iconText = document.getElementById("icon-text");

// Change between light/dark mode

iconContainer.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (iconTheme.src.includes("sun.svg")) {
    iconTheme.src = "./icons/moon.svg";
    iconText.textContent = "Dark Mode";
  } else {
    iconTheme.src = "./icons/sun.svg";
    iconText.textContent = "Light Mode";
  }
});

// navToggle.addEventListener("click", () => {
//     if(navMenu.classList.contains("nav-menu_visible")) {
//         navMenu.classList.remove("nav-menu_visible")
//     } else {
//         navMenu.classList.add("nav-menu_visible");

//     }
// })

// linksNav.forEach(menuLink => {
//     menuLink.addEventListener("click", function() {
//         navMenu.classList.remove("nav-menu_visible")
//     })
// })
