document.addEventListener('DOMContentLoaded', function() {

	const itemsAbout = document.querySelectorAll('.about-item');
	const itemsContact = document.querySelectorAll('.contact-item')
	const copyPopup = document.getElementById('popup-copy');

	itemsAbout.forEach((item) => {
        item.addEventListener('click', () => {
            copyText(item);
        });
	})

	itemsContact.forEach((item) => {
        item.addEventListener('click', () => {
            copyText(item);
        });
	})

	function copyText(item) {
		const span = item.querySelector('span');
		const text = span.textContent;
		navigator.clipboard.writeText(text).then(function() {
			displayCopy();
		}).catch(function(err) {
			console.error("Erreur lors de la copie du texte : ", err);
		});
	}

	function displayCopy() {
		copyPopup.classList.remove('opacity-0');
		
		setTimeout(() => {
			copyPopup.classList.add('opacity-0');
		}, 5000);
	}
});