document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitButton');
    const confessionInput = document.getElementById('confessionInput');
    const confessionOutput = document.getElementById('confessionOutput');

    // Function to handle the submission of the confession
    submitButton.addEventListener('click', () => {
        const confessionText = confessionInput.value.trim();

        if (confessionText) {
            // Display the confession message
            confessionOutput.innerHTML = `<p>${confessionText}</p>`;
            confessionInput.value = ''; // Clear the input field
        } else {
            alert('Please enter a confession message before submitting.');
        }
    });
});
