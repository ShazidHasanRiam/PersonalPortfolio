// show menu y hidden
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// SHOW Menu
// validate if constant exists
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// Menu Hidden
// validate if constants exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

// Remove menu mobile
const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

// SKILLS SCETION
const skillsContent = document.getElementsByClassName("skills-content");
const skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills-content skills-close";
  }

  if (itemClass === "skills-content skills-close") {
    this.parentNode.className = "skills-content skills-open";
  }
}
skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

//Qualification
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification-active");
    });

    target.classList.add("qualification-active");
    tab.forEach((tab) => {
      tab.classList.remove("qualification-active");
    });

    tab.classList.add("qualification-active");
  });
});
