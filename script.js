const container = document.getElementById("heartContainer");

function heartFunction(t) {
    let x = 16 * Math.pow(Math.sin(t), 3);
    let y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    return { x: x * 10, y: -y * 10 };
}

function createHeartText() {
    for (let i = 0; i < Math.PI * 2; i += 0.1) {
        for (let z = -50; z <= 50; z += 10) {  // Creating depth
            let pos = heartFunction(i);
            let text = document.createElement("div");
            text.className = "text";
            text.innerText = "I Love You";
            text.style.transform = `translate3d(${pos.x}px, ${pos.y}px, ${z}px)`;
            container.appendChild(text);
        }
    }
}

createHeartText();
