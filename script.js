// Alert at the beginning
window.onload = function() {
    alert("Happy Eid! Shuffle the envelopes and choose one to see your amount of money.");
};

let moneyAmounts = [10, 15, 20]; // Money amounts in the envelopes

// Function to shuffle envelopes
function shuffleEnvelopes() {
    moneyAmounts = moneyAmounts.sort(() => Math.random() - 0.5);
    document.getElementById("result").innerText = "Envelopes shuffled! Choose one.";

    // Add shake animation to each envelope
    document.querySelectorAll('.envelope').forEach(envelope => {
        envelope.classList.add('shake');
        setTimeout(() => {
            envelope.classList.remove('shake');
        }, 500);
    });

    // Hide all money amounts before choosing
    document.querySelectorAll('.money').forEach(money => {
        money.style.opacity = 0;
    });
}

// Function to choose an envelope
function chooseEnvelope(index) {
    const amount = moneyAmounts[index];
    document.getElementById("result").innerText = `You got RM${amount}!`;

    // Show the money amount on the chosen envelope
    let moneyElement = document.getElementById(`money${index}`);
    moneyElement.innerText = `RM ${amount}`;
    moneyElement.style.opacity = 1;

    // Redirect to WhatsApp to redeem the money
    const phoneNumber = "0104498264"; // WhatsApp recipient number
    const message = `I have chosen an envelope and got RM${amount}! How can I redeem it?`;
    const whatsappURL = `https://api.whatsapp.com/send?phone=60${phoneNumber}&text=${encodeURIComponent(message)}`;

    setTimeout(() => {
        window.location.href = whatsappURL;
    }, 2500);
}
