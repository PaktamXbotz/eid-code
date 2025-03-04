const container = document.getElementById("heartContainer");

function circleFunction(t) {
    let x = 150 * Math.cos(t);
    let y = 150 * Math.sin(t);
    return { x, y };
}

function createCircleText() {
    for (let i = 0; i < Math.PI * 2; i += 0.1) {
        let pos = circleFunction(i);
        let text = document.createElement("div");
        text.className = "text";
        text.innerText = "I Love You";
        text.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
        container.appendChild(text);
    }
}

createCircleText();
