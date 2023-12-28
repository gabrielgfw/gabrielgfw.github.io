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

// Selecting project div:
let projectContent = document.querySelector('.example-content .project');

// // Fetching project html data:
// fetch('https://gabrielgfw.github.io/payload-checker/')
//   .then(response => response.text())
//   .then(data => console.log(data));

