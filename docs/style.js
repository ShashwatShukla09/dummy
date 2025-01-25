// Button click functionality in the "info" section
const joinButton = document.querySelector('.info button');

joinButton.addEventListener('click', () => {
  alert('Thank you for joining 100xDevs!');
  // Redirect to another page if needed
  // window.location.href = "https://example.com";
});

// Select the track container
const carouselTrack = document.querySelector('.carousel-track');

// Duplicate the images for infinite scrolling
const images = carouselTrack.innerHTML;
carouselTrack.innerHTML += images;









































