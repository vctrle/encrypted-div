document.getElementById('encryptButton').addEventListener('click', function() {
    const htmlContent = document.getElementById('htmlInput').value;
    const passcode = document.getElementById('encryptPasscode').value;

    if (htmlContent && passcode) {
        const encrypted = CryptoJS.AES.encrypt(htmlContent, passcode).toString();
        const libraryLink = '<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.1.1/crypto-js.min.js"><\/script>';
        const decryptionScript = 
<script>
	document.getElementById('decryptButton').addEventListener('click', function() {
		const decryptPasscode = document.getElementById('decryptPasscode').value;
		if (decryptPasscode) {
			try {
				const encryptedContent = document.getElementById('encryptedData').innerText;
				const decrypted = CryptoJS.AES.decrypt(encryptedContent, decryptPasscode).toString(CryptoJS.enc.Utf8);
				if (decrypted) {
					const decryptedDiv = document.getElementById('encryptedContent');
					decryptedDiv.innerHTML = decrypted;
				} else {
					alert('Incorrect passcode');
				}
			} catch (e) {
				alert('Incorrect passcode');
			}
		} else {
			alert('Please enter a passcode');
		}
	});
<\/script>
        ;
        document.getElementById('htmlInput').value = 
${libraryLink}
<div id="encryptedContent">
	<input type="password" id="decryptPasscode" placeholder="Enter passcode">
	<button id="decryptButton">Decrypt</button>
	<div id="encryptedData" style="display:none;">${encrypted}</div>
	${decryptionScript}
</div>
        ;
    } else {
        alert('Please enter both HTML content and a passcode');
    }
});
