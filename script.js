function goHome() {
    window.location.href = "index.html";
}

const text = "Welcome to 3SFOR Physics";
const typingElement = document.getElementById("typing");
let index = 0;

function typeEffect() {
    if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 90);
    }
}

typeEffect();
