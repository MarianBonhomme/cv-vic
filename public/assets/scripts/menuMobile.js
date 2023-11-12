document.addEventListener('DOMContentLoaded', function() {

	const body = document.body;
	const openBtn = document.getElementById('open-menu-button');
	const closeBtn = document.getElementById('close-menu-button');
	const modal = document.getElementById('menu-mobile');

	openBtn.addEventListener('click', () => {
		toggleModal(true);
	})

	closeBtn.addEventListener('click', () => {
		toggleModal(false);
	})

	window.toggleModal = function(openMenu) {
		if (openMenu) {
			modal.classList.remove('translate-x-full');
			body.classList.add('overflow-hidden');
		} else {
			modal.classList.add('translate-x-full');
			body.classList.remove('overflow-hidden');
		}		
	}
});