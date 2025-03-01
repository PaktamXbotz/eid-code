document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    let isMouseDown = false;
    let startX, startY, initialRotateX, initialRotateY;

    const handleMouseDown = (e) => {
        isMouseDown = true;
        startX = e.clientX;
        startY = e.clientY;
        initialRotateX = parseFloat(getComputedStyle(circle).transform.split(',')[5]) || 0;
        initialRotateY = parseFloat(getComputedStyle(circle).transform.split(',')[4]) || 0;
    };

    const handleMouseMove = (e) => {
        if (!isMouseDown) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const rotateX = initialRotateX + dy * 0.1;
        const rotateY = initialRotateY + dx * 0.1;
        circle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseUp = () => {
        isMouseDown = false;
    };

    circle.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    circle.addEventListener('touchstart', (e) => handleMouseDown(e.touches[0]));
    document.addEventListener('touchmove', (e) => handleMouseMove(e.touches[0]));
    document.addEventListener('touchend', handleMouseUp);
});
