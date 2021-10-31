AOS.init();

window.addEventListener("scroll", () => {
    let value = window.scrollY;
    if (window.scrollY > 730) {
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, 0.79)";
    }
    else {
        document.querySelector("nav").style.backgroundColor = "transparent";
    }
})