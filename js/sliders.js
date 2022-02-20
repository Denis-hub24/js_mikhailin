import Swiper, { Navigation } from 'swiper';

const benefitsSlider = new Swiper('.benefits-slider', {
	modules: [Navigation],
	navigation: {
		nextEl: '.benefits__arrow--right',
		prevEl: '.benefits__arrow--left',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 3,
		}
	}
});

const servicesSlider = new Swiper('.services-slider', {
	modules: [Navigation],
	navigation: {
		nextEl: '.services__arrow--right',
		prevEl: '.services__arrow--left',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		576: {
			slidesPerView: 2,
		}
	}
});
