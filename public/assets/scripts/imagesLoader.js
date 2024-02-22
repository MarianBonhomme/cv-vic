document.addEventListener('DOMContentLoaded', function() {

	function preloadImages() {
		const images = [
			'../assets/images/vic.webp',
			'../assets/images/vic-about.webp',
			'../assets/images/trip.webp',
			'../assets/images/street.webp',
			'../assets/images/rando.webp',
			'../assets/images/adecco.webp',
			'../assets/images/bachelor.webp',
			'../assets/images/caisse.webp',
			'../assets/images/golf.webp',
			'../assets/images/golf2.webp',
			'../assets/images/intersport.webp',
			'../assets/images/master.webp',
			'../assets/images/ndrc.webp',
			'../assets/images/vendeuse.webp',
			'../assets/images/vnvb.webp',
		];
		images.forEach((image) => {
			new Image().src = image;
		});
	}

	preloadImages();
});