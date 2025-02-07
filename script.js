function drawLeaf(ctx, x, y) {
    ctx.fillStyle = '#32CD32'; // Light green color for leaves
    ctx.beginPath();
    ctx.moveTo(x - 30, y + 50);
    ctx.quadraticCurveTo(x - 50, y + 80, x - 20, y + 70);
    ctx.quadraticCurveTo(x - 10, y + 60, x - 30, y + 50);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(x + 30, y + 50);
    ctx.quadraticCurveTo(x + 50, y + 80, x + 20, y + 70);
    ctx.quadraticCurveTo(x + 10, y + 60, x + 30, y + 50);
    ctx.fill();
}

function drawStem(ctx, x, y) {
    ctx.fillStyle = '#228B22'; // Green color for stem
    ctx.fillRect(x - 5, y, 10, 100);
}

function drawTulip(ctx, x, y) {
    // Draw the petals
    ctx.fillStyle = '#FF69B4'; // Pink color for petals
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 30, y - 30, x - 20, y + 30, x, y);
    ctx.bezierCurveTo(x + 20, y + 30, x + 30, y - 30, x, y);
    ctx.closePath();
    ctx.fill();
}

async function drawTulipWithDelay(ctx, x, y) {
    // Draw leaves first
    drawLeaf(ctx, x, y);
    await new Promise(resolve => setTimeout(resolve, 500)); // Delay of 0.5 seconds

    // Draw stem next with animation
    for (let i = 0; i <= 1; i += 0.1) {
        drawLeaf(ctx, x, y); // Redraw leaves
        drawStem(ctx, x, y, i); // Draw stem with progress
        await new Promise(resolve => setTimeout(resolve, 50)); // Delay for animation
    }

    // Draw petals last with animation
    for (let i = 0; i <= 1; i += 0.1) {
        drawLeaf(ctx, x, y); // Redraw leaves
        drawStem(ctx, x, y); // Draw stem fully
        drawTulip(ctx, x, y); // Draw petals with progress
        await new Promise(resolve => setTimeout(resolve, 50)); // Delay for animation
    }
}

async function drawTulips() {
    const canvas = document.getElementById('tulipCanvas');
    const ctx = canvas.getContext('2d');

    const tulips = [
        { x: 200, y: 150 },
        { x: 100, y: 200 },
        { x: 300, y: 200 }
    ];

    for (const tulip of tulips) {
        await drawTulipWithDelay(ctx, tulip.x, tulip.y);
    }
}

// Start drawing tulips
drawTulips();
