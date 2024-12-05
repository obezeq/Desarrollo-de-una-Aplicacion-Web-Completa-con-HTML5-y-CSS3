'use strict'

const words = ["programmers", "tech lovers", "gamers", "designers"];

let i = 0;
let timer;

function typeWriter() {
    let word = words[i].split("");
    let loopTyping = function() {
        if (word.length > 0) {
            document.querySelector(".typing").innerHTML += word.shift();
        } else {
            deleteWord();
            return false;
        }
        timer = setTimeout(loopTyping, 150);
    };
    loopTyping();
}

function deleteWord() {
    let word = words[i].split("");
    let loopDeleting = function() {
        if (word.length > 0) {
            word.pop();
            document.querySelector(".typing").innerHTML = word.join("");
        } else {
            if (i < words.length - 1) {
                i++;
            } else {
                i = 0;
            }
            typeWriter();
            return false;
        }
        timer = setTimeout(loopDeleting, 100);
    };
    setTimeout(loopDeleting, 1500);
}

function parallaxEffect(){
    document.addEventListener('scroll', function() {
        const descriptions = document.querySelector('.home__descriptions');
        const windowHeight = window.innerHeight;
        const elementTop = descriptions.getBoundingClientRect().top;
    
        // Check if the element is in the viewport
        if (elementTop < windowHeight) {
            descriptions.classList.add('visible');
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    typeWriter();
    parallaxEffect();
});