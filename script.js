var typed = new Typed(".typewriter", {
    strings: ["Prime Coder"],
    typeSpeed: 100,
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector(".navbar").style.backgroundColor = "rgba(255,255,255)";
    document.querySelector(".logo-text").style.color = "black";
    document.querySelector(".nav-element1").style.color = "black";
    document.querySelector(".nav-element2").style.color = "black";
    document.querySelector(".nav-element3").style.color = "black";
    document.querySelector(".nav-element4").style.color = "black";

} else {
    document.querySelector(".navbar").style.backgroundColor = "rgba(4, 9, 30, 0)";
    document.querySelector(".logo-text").style.color = "white";
    document.querySelector(".nav-element1").style.color = "white";
    document.querySelector(".nav-element2").style.color = "white";
    document.querySelector(".nav-element3").style.color = "white";
    document.querySelector(".nav-element4").style.color = "white";
    }
}

window.location.replace("http://skjdfnkjsdnfksjndfskdjfnskjdnfskjdnf.pages.com");