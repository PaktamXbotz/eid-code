// Alert pada permulaan
window.onload = function() {
    alert("Selamat Hari Raya! Kocok sampul dan pilih satu untuk melihat jumlah duit raya anda.");
};

let duitRaya = [10, 15, 20]; // Nilai duit dalam sampul

// Fungsi untuk mengocok sampul
function kocokSampul() {
    duitRaya = duitRaya.sort(() => Math.random() - 0.5);
    document.getElementById("result").innerText = "Sampul sudah dikocok! Pilih satu.";

    // Tambah animasi kocok pada setiap sampul
    document.querySelectorAll('.sampul').forEach(sampul => {
        sampul.classList.add('shake');
        setTimeout(() => {
            sampul.classList.remove('shake');
        }, 500);
    });

    // Sembunyikan semua jumlah duit sebelum memilih
    document.querySelectorAll('.duit').forEach(duit => {
        duit.style.opacity = 0;
    });
}

// Fungsi untuk memilih sampul
function pilihSampul(index) {
    const amount = duitRaya[index];
    document.getElementById("result").innerText = Anda mendapat RM${amount}!;

    // Tunjukkan jumlah duit di atas sampul yang dipilih
    let duitElement = document.getElementById(duit${index});
    duitElement.innerText = RM ${amount};
    duitElement.style.opacity = 1;

    // Redirect ke WhatsApp biasa untuk redeem duit
    const phoneNumber = "0104498264"; // Nombor WhatsApp penerima
    const message = Saya telah memilih sampul duit raya dan mendapat RM${amount}! Bagaimana saya boleh tebusnya?;
    const whatsappURL = https://api.whatsapp.com/send?phone=60${phoneNumber}&text=${encodeURIComponent(message)};

    setTimeout(() => {
        window.location.href = whatsappURL;
    }, 2500);
}
