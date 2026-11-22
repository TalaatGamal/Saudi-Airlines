
window.addEventListener("load", () => {

    const timer = document.querySelector(".timer");

    document.querySelector(".loader").style.display = "none";
    document.querySelector(".check").style.display = "inline-block";

    let seconds = 3;

    timer.textContent = seconds;

    const countdown = setInterval(() => {

        seconds--;

        timer.textContent = seconds;

        if (seconds <= 0) {

            clearInterval(countdown);

            document.querySelector(".time").style.display = "none";

            document.querySelector(".intro").style.opacity = "0";

            setTimeout(() => {
                document.querySelector(".intro").style.display = "none";
            }, 1000);

        }

    }, 1000);

});




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