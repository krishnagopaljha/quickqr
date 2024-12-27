function generateQRCode() {
    const inputText = document.getElementById('inputText').value.trim();
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const errorMessage = document.getElementById('errorMessage');

    // Clear previous QR code and error message
    qrCodeContainer.innerHTML = '';
    errorMessage.style.display = 'none';

    // Validate input
    if (inputText === '') {
        errorMessage.textContent = 'Please enter a URL or text to generate a QR code.';
        errorMessage.style.display = 'block';
        return;
    }

    // Generate the QR code
    QRCode.toDataURL(inputText, {
        errorCorrectionLevel: 'H',  // High error correction
        width: 300,  // Width of the QR code
        color: {
            dark: '#000000',  // QR code dark color
            light: '#ffffff'  // QR code light color (background)
        }
    }, function (err, url) {
        if (err) {
            console.error('QR code generation failed: ', err);
            errorMessage.textContent = 'Failed to generate the QR code. Please try again.';
            errorMessage.style.display = 'block';
        } else {
            // Create an image element to display the QR code
            const img = document.createElement('img');
            img.src = url;
            qrCodeContainer.appendChild(img);
        }
    });
}
