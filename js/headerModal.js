let overlay = document.querySelector('.overlay');

let headerOpen = document.querySelector('[data-header-open]');
let headerModal = document.querySelector('.header-modal');
let headerClose = document.querySelector('.header-modal__close');

headerOpen.addEventListener('click', () => {
	headerModal.classList.toggle('_active');
	overlay.classList.toggle('_active');
})

headerClose.addEventListener('click', () => {
	headerModal.classList.toggle('_active');
	overlay.classList.toggle('_active');
})