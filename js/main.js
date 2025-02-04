document.addEventListener('DOMContentLoaded', () => {
  const flowers = document.querySelectorAll('.flower');

  flowers.forEach(flower => {
    flower.addEventListener('click', () => {
      // Change the color of the flower
      flower.style.backgroundColor = getRandomColor();
    });
  });

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});
