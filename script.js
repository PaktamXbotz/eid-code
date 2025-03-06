const container = document.getElementById("moonContainer");

function crescentFunction(t) {
    let x = 10 * (Math.cos(t) - 0.4 * Math.cos(2 * t)); // Bentuk bulan sabit lebih tipis dan tajam
    let y = 20 * Math.sin(t);
    return { x: x * 10, y: -y * 10 };
}

function createCrescentText() {
    for (let i = 0; i < Math.PI * 2; i += 0.2) { // Mengurangi kepadatan teks
        let pos = crescentFunction(i);
        let text = document.createElement("div");
        text.className = "text";
        text.innerText = "Ramadhan";
        text.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0px) rotate(${i}rad)`;
        container.appendChild(text);
    }
}

createCrescentText();
