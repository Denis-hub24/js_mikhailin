ymaps.ready(function () {
	var mapexMap = new ymaps.Map('mapexMap', {
		center: [53.89063752803102, 27.52623526574704],
		zoom: 14,
		controls: ['zoomControl']
	}),
		myPlacemark = new ymaps.Placemark(
			[53.89063752803102, 27.52623526574704],
			{ "iconContent": "", "balloonContentBody": "г. Минск, ул. Ваша улица, д. 22", "balloonContentHeader": "«Профремонт»" },
			{
				iconLayout: 'default#image',
				iconImageHref: 'images/marker.png',
				iconImageSize: [30, 42],
				iconImageOffset: [-5, -38]
			});
	mapexMap.behaviors.disable('scrollZoom');
	mapexMap.geoObjects.add(myPlacemark);
});