export default function DownloadImage(imageLink, imageContainer) {
	const imageHolder = document.getElementById(`${imageContainer}`);
	const downloadButton = document.createElement("a");
	downloadButton.download = "qr-code.jpg";
	downloadButton.style.display = "none";
	downloadButton.href = imageLink;
	imageHolder.appendChild(downloadButton);

	downloadButton.click();
}
