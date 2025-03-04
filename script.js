const container = document.getElementById("heartContainer");

function createHeartText() {
    for (let i = 0; i < Math.PI * 2; i += 0.1) {
        let text = document.createElement("div");
        text.className = "text";
        text.innerText = "I Love You";
        text.style.top = `${Math.random() * 100}%`; // Random position for variety
        text.style.left = `${Math.random() * 100}%`;
        container.appendChild(text);
    }
}

createHeartText();
