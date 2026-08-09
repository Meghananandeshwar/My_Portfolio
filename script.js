
// ===============================
// MOBILE NAVBAR TOGGLE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}

// ===============================
// TYPING ANIMATION
// ===============================

const roles = [
    "Python Developer",
    "Machine Learning Enthusiast",
    "Data Analytics Learner",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(deleteText, 1500);
    }
}

function deleteText() {

    if (!typingElement) return;

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .timeline-card, .internship-card, .certificate-card, .contact-card, .cert-card, .achievement-card, .stat-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// ===============================
// ACTIVE NAVBAR LINK
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active-link");
        }
    });
});

// ===============================
// HEADER SHADOW
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";
    }
});

// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        contactForm.reset();
    });
}

// ===============================
// COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const target =
            Number(counter.getAttribute("data-target"));

        let count = 0;

        const increment =
            Math.max(1, Math.ceil(target / 50));

        const updateCounter = () => {

            if (count < target) {

                count += increment;

                if (count > target) {
                    count = target;
                }

                counter.innerText = count;

                setTimeout(updateCounter, 30);

            } else {

                counter.innerText = target;
            }
        };

        updateCounter();
    });
}

const statsSection =
    document.querySelector(".stats");

if (statsSection) {

    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startCounter();

                    observer.unobserve(entry.target);
                }
            });

        },
        {
            threshold: 0.3
        }
    );

    observer.observe(statsSection);
}

// ===============================
// INITIAL LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    typeText();

    revealOnScroll();
});

// ===============================
// BACK TO TOP BUTTON
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"
    });
});

// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle =
document.getElementById("theme-toggle");

if(themeToggle){

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if(document.body.classList.contains("light-mode")){

            themeToggle.innerHTML = "☀️";

        }else{

            themeToggle.innerHTML = "🌙";
        }
    });
}

// ===============================
// LOADER SCREEN
// ===============================

window.addEventListener("load", () => {

    const loader =
    document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.transition =
        "0.5s ease";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    },1000);
});
=======
// ===============================
// MOBILE NAVBAR TOGGLE
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Close menu when clicking a nav link

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });

});

// ===============================
// TYPING ANIMATION
// ===============================

const roles = [
    "Python Developer",
    "Machine Learning Enthusiast",
    "Data Analytics Learner",
    "AI Enthusiast"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (!typingElement) return;

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent +=
            roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(deleteText, 1500);
    }
}

function deleteText() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .timeline-card, .internship-card, .certificate-card, .contact-card"
);

revealElements.forEach(element => {
    element.classList.add("reveal");
});

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }
    });
}

window.addEventListener("scroll", revealOnScroll);

// ===============================
// ACTIVE NAVBAR LINK ON SCROLL
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active-link");
        }
    });
});

// ===============================
// HEADER SHADOW ON SCROLL
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";
    }
});

// ===============================
// CONTACT FORM DEMO
// ===============================

const contactForm =
    document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", (e) => {

        e.preventDefault();

        alert(
            "Thank you for contacting me! I will get back to you soon."
        );

        contactForm.reset();
    });
}

// ===============================
// INITIAL LOAD
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    typeText();
    revealOnScroll();

});

