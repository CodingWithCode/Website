var typed = new Typed(".typewriter", {
    strings: ["Prime Coder"],
    typeSpeed: 100,
})

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".navbar").style.backgroundColor = "rgba(255,255,255)";
        document.querySelector(".logo-text").style.color = "black";
        if (window.innerWidth > 630) {
            document.querySelector(".nav-element1").style.color = "black";
            document.querySelector(".nav-element2").style.color = "black";
            document.querySelector(".nav-element3").style.color = "black";
            document.querySelector(".nav-element4").style.color = "black";
            document.querySelector(".nav-element5").style.color = "black";
            document.getElementById("close-nav").style.color = "black";
        }
        document.getElementById("open-nav").style.color = "black";
    } else {
        document.querySelector(".navbar").style.backgroundColor = "rgba(4, 9, 30, 0)";
        document.querySelector(".logo-text").style.color = "white";
        if (window.innerWidth > 630) {
            document.querySelector(".nav-element1").style.color = "white";
            document.querySelector(".nav-element2").style.color = "white";
            document.querySelector(".nav-element3").style.color = "white";
            document.querySelector(".nav-element4").style.color = "white";
            document.querySelector(".nav-element5").style.color = "white";
            document.getElementById("close-nav").style.color = "white";
        }
        document.getElementById("open-nav").style.color = "white";
    }
}

var loader = document.getElementById('loader');

window.addEventListener('load', function(){
    loader.style.display = 'none';
});

const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal_container');

open.addEventListener('click', () => {
	modal.classList.add('show');
});

close.addEventListener('click', () => {
	modal.classList.remove('show');
});

document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
  });
  
