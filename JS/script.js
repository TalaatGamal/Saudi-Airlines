



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
const log_btn = document.getElementById("log");
const white = document.getElementById("white");
const sections = document.getElementById("main");
const body = document.getElementById("body");
const white_logo = document.getElementById("white-logo");
const green_logo = document.getElementById("green-logo");

let isScrolled = false;
let isPlanVisible = false;

function updateHeader() {

    if (isPlanVisible) {
        header.style.background = "#ffffff";
        header.style.borderBottom ="solid 1px #0000004a";
        header.style.color = "var(--colorp)";
        log_btn.style.backgroundColor = "var(--color1-5)";
        log_btn.style.color = "var(--color1)";
        green_logo.style.display = "flex";
        white_logo.style.display = "none";

    } else if (isScrolled) {
        header.style.background = "#1a1a1a";
        header.style.color = "#ffffff";
        log_btn.style.backgroundColor = "var(--color1)";
        log_btn.style.color = "#ffffff";
        white_logo.style.display = "flex";
        green_logo.style.display = "none";

    } else {
        white_logo.style.display = "flex";
        green_logo.style.display = "none";
        log_btn.style.backgroundColor = "var(--color1)";
        log_btn.style.color = "#ffffff";
        header.style.borderBottom ="none";
        header.style.color = "#ffffff";
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

        if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {

            isPlanVisible = true;

        } else {

            // نتأكد إن العنصر الآخر مش ظاهر قبل إلغاء الحالة
            isPlanVisible = false;

        }

        sections.style.background = isPlanVisible
            ? "#ffffff"
            : "var(--main-dark-color)";

        body.style.color = isPlanVisible
            ? "var(--color4)"
            : "var(--color3)";

        updateHeader();

    });

}, {
    threshold: 0.2
});

// Observe
if (white) observer.observe(white);