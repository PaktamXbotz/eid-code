function drawTulip(ctx, x, y) {
    // Draw the petals
    ctx.fillStyle = '#FF69B4'; // Pink color for petals
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x - 20, y - 30, x - 20, y + 30, x, y);
    ctx.bezierCurveTo(x + 20, y + 30, x + 20, y - 30, x, y);
    ctx.closePath();
    ctx.fill();

    // Draw the stem
    ctx.fillStyle = '#228B22'; // Green color for stem
    ctx.fillRect(x - 5, y, 10, 100);

    // Draw the leaves
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

const canvas = document.getElementById('tulipCanvas');
const ctx = canvas.getContext('2d');

// Draw multiple tulips
drawTulip(ctx, 200, 150);
drawTulip(ctx, 100, 200);
drawTulip(ctx, 300, 200);
