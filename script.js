// Typing Animation Setup
const typingEffect = () => {
    const text = "Cyber Security Trainer | Ethical Hacker | Network Security Expert";
    const speed = 100;
    let i = 0;
    const target = document.querySelector(".typing");

    function type() {
        if (i < text.length) {
            target.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
};

// Sticky Navbar Logic
window.addEventListener("scroll", () => {
    const header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 50);
});

// Scroll Reveal Animations
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.hero-content, .section-title', { origin: 'top' });
ScrollReveal().reveal('.hero-img, .project-card, .contact-form', { origin: 'bottom' });
ScrollReveal().reveal('.about-text', { origin: 'left' });
ScrollReveal().reveal('.certifications, .skills-wrapper', { origin: 'right' });

// Dark Mode Toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
    const body = document.body;
    const icon = themeBtn.querySelector("i");
    
    if (body.classList.contains("dark-theme")) {
        body.classList.replace("dark-theme", "light-theme");
        body.setAttribute("data-theme", "light");
        icon.classList.replace("fa-moon", "fa-sun");
    } else {
        body.classList.replace("light-theme", "dark-theme");
        body.setAttribute("data-theme", "dark");
        icon.classList.replace("fa-sun", "fa-moon");
    }
});

// Mobile Hamburger Menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active-nav");
    hamburger.classList.toggle("toggle");
});

// Ripple Effect for Buttons
const buttons = document.querySelectorAll(".ripple");
buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        let ripples = document.createElement("span");
        ripples.style.left = x + "px";
        ripples.style.top = y + "px";
        this.appendChild(ripples);
        setTimeout(() => ripples.remove(), 1000);
    });
});

// Initialize Typing on Load
window.onload = typingEffect;