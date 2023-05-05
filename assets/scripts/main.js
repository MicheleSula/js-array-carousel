// Array images
const images = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];
console.log(images.length);
// Current element index
let currentImageIndex = 0;

// Containers and next/prev buttons
const container = document.querySelector('.container');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const thumbnailsContainer = document.querySelector('.thumbnails');

// Creating an image for each array element and appending it to container
for (let i = 0; i < images.length; i++) {
  
    // Create image
    const img = document.createElement('img');
    // Setting img source and adding class
    img.src = images[i];
    img.classList.add("visible");

    if (i !== currentImageIndex) {
        img.classList.add("hidden");
        img.classList.remove("visible");
    }
    // Output
    container.appendChild(img);

    
    // Creating thumbnail img
    const thumbnail = document.createElement('img');
    // Setting img source and class
    thumbnail.src = images[i];
    thumbnail.classList.add('thumbnail-opacity');

    if (i === currentImageIndex) {
        thumbnail.classList.add('active-thumbnail');
    }
    // Output
    thumbnailsContainer.appendChild(thumbnail);
}

// Next button
nextButton.addEventListener('click', 
    
    function () {

    // Making current image hidden and current thumbnail not active
    container.children[currentImageIndex].classList.add("hidden");
    container.children[currentImageIndex].classList.remove("visible");
    thumbnailsContainer.children[currentImageIndex].classList.remove('active-thumbnail');

    // Increment of index and cycle
    currentImageIndex = (currentImageIndex + 1) % images.length;
    console.log(currentImageIndex);
    
    // After index increment making current image visible and thumbnail active
    container.children[currentImageIndex].classList.remove("hidden");
    container.children[currentImageIndex].classList.add("visible");
    thumbnailsContainer.children[currentImageIndex].classList.add('active-thumbnail');
});

// Prev button
prevButton.addEventListener('click',
    
    function () {

    container.children[currentImageIndex].classList.add("hidden");
    container.children[currentImageIndex].classList.remove("visible");
    thumbnailsContainer.children[currentImageIndex].classList.remove('active-thumbnail');

    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    console.log(currentImageIndex);

    container.children[currentImageIndex].classList.remove("hidden");
    container.children[currentImageIndex].classList.add("visible");
    thumbnailsContainer.children[currentImageIndex].classList.add('active-thumbnail');
});