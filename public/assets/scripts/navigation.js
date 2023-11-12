document.addEventListener('DOMContentLoaded', function() {

	const navbar = document.getElementById("navbar");
	const navbarItems = navbar.querySelectorAll('li');
	const navbarMobile = document.getElementById("navbar-mobile");
	const navbarItemsMobile = navbarMobile.querySelectorAll('li');
	const contactButton = document.getElementById('contact-button');

	contactButton.addEventListener('click', () => {
		scrollToSection('contact');
	});

	navbarItems.forEach(item => {
		item.addEventListener('click', () => {
			scrollToSection(item.getAttribute('data-value'));
		});
	});

	navbarItemsMobile.forEach(item => {
		item.addEventListener('click', () => {
			scrollToSection(item.getAttribute('data-value'));
			toggleModal(false);
		});
	});

	function scrollToSection(item) {
		var section = document.getElementById(item);
		section.scrollIntoView({ block: 'start', behavior: "smooth" });
	}
})