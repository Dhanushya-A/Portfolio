// ==============================
// Dhanushya Portfolio JavaScript
// ==============================

// Typing animation
const typingElement = document.getElementById("typing");
const roles = ["Web Developer", "Python & Flask Developer", "AI Enthusiast"];

if (typingElement) {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {
        const currentRole = roles[roleIndex];

        if (!deleting) {
            charIndex++;
            typingElement.textContent = currentRole.substring(0, charIndex);

            if (charIndex === currentRole.length) {
                deleting = true;
                setTimeout(typeEffect, 1300);
                return;
            }
        } else {
            charIndex--;
            typingElement.textContent = currentRole.substring(0, charIndex);

            if (charIndex === 0) {
                deleting = false;
                roleIndex = (roleIndex + 1) % roles.length;
            }
        }

        setTimeout(typeEffect, deleting ? 45 : 85);
    }

    typeEffect();
}

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("primaryNavigation");

if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("is-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });

    navigation.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    document.addEventListener("click", (event) => {
        if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
            navigation.classList.remove("is-open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation menu");
            menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
}

// Navbar shadow on scroll
const siteHeader = document.querySelector(".site-header");
window.addEventListener("scroll", () => {
    if (siteHeader) {
        siteHeader.classList.toggle("scrolled", window.scrollY > 20);
    }
});

// Back to top
const topBtn = document.getElementById("topBtn");
if (topBtn) {
    topBtn.addEventListener("click", (event) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Reveal sections as they enter the viewport
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
} else {
    revealItems.forEach((item) => item.classList.add("visible"));
}

// Highlight the current navigation section
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window && sections.length && navLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                navLinks.forEach((link) => {
                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === `#${entry.target.id}`
                    );
                });
            }
        });
    }, { rootMargin: "-35% 0px -55% 0px" });

    sections.forEach((section) => sectionObserver.observe(section));
}

// Current year in footer
const yearElement = document.getElementById("year");
if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

/* Contact Form */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("contactName").value.trim();
        const email = document.getElementById("contactEmail").value.trim();
        const message = document.getElementById("contactMessage").value.trim();

        const subject = encodeURIComponent(
            "Portfolio Message from " + name
        );

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\n\nMessage:\n" + message
        );

        const mailURL =
            "mailto:dhanushyaa.2005@gmail.com" +
            "?subject=" + subject +
            "&body=" + body;

        window.location.href = mailURL;

    });

}
