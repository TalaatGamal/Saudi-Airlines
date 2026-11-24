



// intro
// intro
// intro
// intro
// intro
// intro
// intro
// intro
// intro
// intro
// intro
// intro
// intro
// intro




// window.addEventListener("load", () => {

//     const timer = document.querySelector(".timer");

//     document.querySelector(".loader").style.display = "none";
//     document.querySelector(".check").style.display = "inline-block";

//     let seconds = 3;

//     timer.textContent = seconds;

//     const countdown = setInterval(() => {

//         seconds--;

//         timer.textContent = seconds;

//         if (seconds <= 0) {

//             clearInterval(countdown);

//             document.querySelector(".time").style.display = "none";

//             document.querySelector(".intro").style.opacity = "0";

//             setTimeout(() => {
//                 document.querySelector(".intro").style.display = "none";
//             }, 1000);

//         }

//     }, 1000);

// });







// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground
// header & changebackground










const header = document.getElementById("header");
const container = document.getElementById("whaite");
const sections = document.getElementById("main");

let isScrolled = false;
let isPlanVisible = false;

function updateHeader() {

    if (isPlanVisible) {
        header.style.background = "#ffffff";

    } else if (isScrolled) {
        header.style.background = "#1a1a1a";

    } else {
        header.style.background = "linear-gradient(to bottom, rgba(0, 0, 0, 0.8) 2.5%, rgba(0, 0, 0, 0.8) 2%, rgba(255, 0, 0, 0) 95.5%)";
    }
}

// Scroll
window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    const scrollPercentage = scrollHeight > 0
        ? (scrollTop / scrollHeight) * 100
        : 0;

    isScrolled = scrollPercentage >= 10;

    updateHeader();

});

// Intersection Observer
const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        isPlanVisible = entry.isIntersecting && entry.intersectionRatio >= 0.5;

        if (isPlanVisible) {
            sections.style.background = "#ffffff";
            console.log("whaite section is whaite")
        } else {
            sections.style.background = "var(--main-dark-color)";
        }

        updateHeader();

    });

}, {
    threshold: 0.5
});

if (container) {
    observer.observe(container);
}
