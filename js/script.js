' use strict';
// *** Select Elements ***
const btn = document.querySelector('.card__form-btn');
const card = document.querySelector('.card');
const cardPopup = document.querySelector('.card__popup');
const ratingInputs = document.querySelectorAll('.card__form-rating-input');
const ratingPopup = document.querySelector('.card__popup-rating');

// *** Event Listener on button ***
btn.addEventListener('click', () => {
  // *** Remove the hidden class to show the popup card ***
  cardPopup.classList.remove('hidden');

  // *** Add the hidden class to hide the main card ***
  card.classList.add('hidden');

  // *** Set the selected rating input value in the popup ***
  ratingInputs.forEach(input => {
    if (input.checked) {
      ratingPopup.textContent = input.value;
    }
  });

  // *** My addition 😂 ***
  /*
  Since the challenge doesn't include a close btn
  , I added a timeout to close it
 */
  setTimeout(() => {
    cardPopup.classList.add('hidden');
    card.classList.remove('hidden');
  }, 3000);
});
