document.addEventListener('DOMContentLoaded', () => {
    const spans = document.querySelectorAll('.tulip-shape span');
    
    spans.forEach((span, index) => {
        span.style.animationDelay = `${index * 0.1}s`;
    });

    document.querySelector('.tulip-shape').addEventListener('mouseover', () => {
        spans.forEach(span => {
            span.style.transform = `scale(1.2)`;
            span.style.transition = 'transform 0.5s';
        });
    });

    document.querySelector('.tulip-shape').addEventListener('mouseout', () => {
        spans.forEach(span => {
            span.style.transform = `scale(1)`;
            span.style.transition = 'transform 0.5s';
        });
    });
});
