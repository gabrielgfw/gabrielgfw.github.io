// Selecting portrait div:
let portraitContent = document.querySelector('.content-container .photo-container .portrait');

// Add click effect:
portraitContent.addEventListener('click', () => {
  const effectClasses = ['animate__animated', 'animate__swing'];
  portraitContent.classList.add(...effectClasses);
  setTimeout(() => {
    portraitContent.classList.remove(...effectClasses)
  }, 1000);
});