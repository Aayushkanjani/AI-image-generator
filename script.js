function generateImage() {
    var imageContainer = document.getElementById('imageContainer');
    var imageUrl = 'https://source.unsplash.com/random';
    var img = document.createElement('img');
    img.src = imageUrl;
    while (imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
    imageContainer.appendChild(img);
}
