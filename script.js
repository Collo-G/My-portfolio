// Menu Toggle for Mobile
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Active Navigation Link on Scroll
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*="${id}"]`).classList.add('active');
            });
        }
    });
};

// Read More Button Functionality
document.addEventListener("DOMContentLoaded", function () {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreText = document.getElementById("moreText");

    if (readMoreBtn && moreText) {
        readMoreBtn.addEventListener("click", function () {
            if (moreText.classList.contains("hidden")) {
                moreText.classList.remove("hidden");
                readMoreBtn.innerText = "Read less";
            } else {
                moreText.classList.add("hidden");
                readMoreBtn.innerText = "Read more";
            }
        });
    }
});
