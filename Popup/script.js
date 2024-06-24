window.addEventListener('DOMContentLoaded', function() {
  var popup = document.getElementById('popup');
  var closeButton = document.getElementById('popup-close');
  

  // Function to show the pop-up
  function showPopup() {
    popup.classList.add('show');
  }

  // Function to close the pop-up
  function closePopup() {
    popup.classList.remove('show');
  }

  // Show the pop-up on page load
  showPopup();

  // Close the pop-up when the close button is clicked
  closeButton.addEventListener('click', closePopup);

  const button = document.querySelector('.button-click-here');
const textElements = ['CLICK HERE', '点击这里'];
let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % textElements.length;
  button.textContent = textElements[currentIndex];
}, 2000);
  
});
