// script.js
const images = document.querySelectorAll('.image img');
const overlay = document.getElementById('overlay');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const close = document.getElementById('close');

images.forEach(image => {
  image.addEventListener('click', () => {
    popupImage.src = image.src;
    overlay.style.display = 'flex';
    popup.style.transform = 'scale(1)';
    popup.style.opacity = 1;
    document.body.style.overflow = 'hidden'; // Lock background scroll
  });
});

close.addEventListener('click', () => {
  overlay.style.display = 'none';
  popup.style.transform = 'scale(0.8)';
  popup.style.opacity = 0;
  document.body.style.overflow = ''; // Unlock background scroll
});
