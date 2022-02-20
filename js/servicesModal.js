let overlay = document.querySelector('.overlay');

let servicesOpen = document.querySelectorAll('[data-services-open]');
let servicesModal = document.querySelector('.services-modal');
let servicesClose = document.querySelector('.services-modal__close');

servicesOpen.forEach(serviceOpen => {
	serviceOpen.addEventListener('click', (e) => {
		if (e.target.closest('.service-button')) {
			servicesModal.classList.toggle('_active');
			overlay.classList.toggle('_active');
		}
	})
});

servicesClose.addEventListener('click', () => {
	servicesModal.classList.toggle('_active');
	overlay.classList.toggle('_active');
})