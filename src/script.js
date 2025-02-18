// Locomotive JS
const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  smartphone: { smooth: true },
  tablet: { smooth: true },
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navbarNav = document.getElementById("navbarNav");

menuToggle.addEventListener("click", () => {
  navbarNav.classList.toggle("hidden");
  navbarNav.classList.toggle("flex");
});

// Close menu if a link is clicked (Mobile)
const navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navbarNav.classList.add("hidden");
      navbarNav.classList.remove("flex");
    }
  });
});

// GSAP Animations on Navigation Bar
gsap.from("#navbar-top", { duration: 1, y: -100, opacity: 0 });
gsap.from(".font-bold", { duration: 1, x: -50, opacity: 0, delay: 0.5 });
gsap.from(".navbar-nav li", {
  duration: 0.5,
  opacity: 0,
  stagger: 0.2,
  delay: 1,
});
gsap.from("#contactButton", {
  duration: 1,
  scale: 0,
  opacity: 0,
  delay: 1.5,
  ease: "back",
});

//Home Section
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from("#home-text", {
  duration: 1,
  opacity: 0,
  x: -100,
  ease: "power1.out",
});

tl.from(
  "#home-description",
  {
    duration: 1,
    opacity: 0,
    x: -100,
    ease: "power1.out",
  },
  "-=0.5"
);
tl.from(
  "#home-button",
  {
    duration: 1.2,
    opacity: 0,
    x: -100,
    ease: "power1.out",
  },
  "-=0.3"
);

tl.from(
  "#home-image",
  {
    duration: 1,
    opacity: 0,
    scale: 0.8,
    ease: "back",
  },
  "-=0.7"
);

// JavaScript to handle button click
document.getElementById("contactButton").addEventListener("click", function () {
  // Scroll to the Contact section
  document.getElementById("contactSection").scrollIntoView({
    behavior: "smooth",
  });
});

// Email JS
function sendMail() {
  let parms = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    contact: document.getElementById("contact").value,
    message: document.getElementById("message").value,
  };

  emailjs
    .send("service_6g88ngr", "template_75xwf35", parms)
    .then(alert("Email Sent!!"));
}
