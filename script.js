document.addEventListener('DOMContentLoaded', () => {
    const circle = document.querySelector('.circle');
    let isDragging = false;
    let startX, startY, initialRotateX = 0, initialRotateY = 0;

    const getRotationValues = (transform) => {
        const values = transform.match(/matrix.*\((.+)\)/)[1].split(', ');
        const a = values[0], b = values[1], c = values[2], d = values[3];
        const scale = Math.sqrt(a * a + b * b);
        const sin = b / scale;
        const angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
        return { rotateX: Math.asin(-sin) * (180 / Math.PI), rotateY: angle };
    };

    const handlePointerDown = (e) => {
        isDragging = true;
        startX = e.clientX || e.touches[0].clientX;
        startY = e.clientY || e.touches[0].clientY;
        const { rotateX, rotateY } = getRotationValues(getComputedStyle(circle).transform);
        initialRotateX = rotateX;
        initialRotateY = rotateY;
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        const clientX = e.clientX || e.touches[0].clientX;
        const clientY = e.clientY || e.touches[0].clientY;
        const dx = clientX - startX;
        const dy = clientY - startY;
        const rotateX = initialRotateX + dy * 0.1;
        const rotateY = initialRotateY + dx * 0.1;
        circle.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handlePointerUp = () => {
        isDragging = false;
    };

    circle.addEventListener('mousedown', handlePointerDown);
    circle.addEventListener('touchstart', handlePointerDown);

    document.addEventListener('mousemove', handlePointerMove);
    document.addEventListener('touchmove', handlePointerMove);

    document.addEventListener('mouseup', handlePointerUp);
    document.addEventListener('touchend', handlePointerUp);
});
