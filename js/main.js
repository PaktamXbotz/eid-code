const changeColorBtn = document.getElementById('changeColorBtn');
const petals = document.querySelectorAll('.petal');

changeColorBtn.addEventListener('click', () => {
    petals.forEach(petal => {
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        petal.style.backgroundColor = randomColor;
    });
});