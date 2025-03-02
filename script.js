document.addEventListener('DOMContentLoaded', () => {
    const crescents = document.querySelectorAll('.crescent');
    crescents.forEach((crescent, index) => {
        const angle = (index / crescents.length) * 360;
        crescent.style.transform = `rotate(${angle}deg)`;
    });

    // Audio playback integration
    const musicPlayer = document.getElementById('musicPlayer');
    document.addEventListener('click', () => {
        if (confirm('Click OK to play music')) {
            musicPlayer.play().then(() => {
                console.log('Playback started successfully.');
            }).catch(error => {
                console.error('Error during playback:', error);
            });
        }
    });
});
