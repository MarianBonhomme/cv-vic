document.addEventListener('DOMContentLoaded', function() {

	emailjs.init("szTb5Nn2NrBUgf7rp");

	const form = document.getElementById('contact-form');
	const button = form.querySelector('#submit');
	const inputs = form.querySelectorAll('input, textarea');

	const invalidPopup = document.getElementById('popup-invalid');
	const confirmPopup = document.getElementById('popup-confirm');
	const errorPopup = document.getElementById('popup-confirm');

	button.addEventListener('click', () => {
		
		const isFormValid = checkFormValidity();

		if (isFormValid) {

			const formData = {
				name: document.getElementById('name').value,
				email: document.getElementById('email').value,
				subject: document.getElementById('subject').value,
				message: document.getElementById('message').value,
			};
			
			emailjs.send('service_q4pssxq', 'template_vqa35tu', formData)
				.then(function() {   
					displayConfirm();
				}, function() {
					displayError();            		
				}
			);

			resetInputs();
		} else {
			displayInvalid();			
		}
	})

	function checkFormValidity() {
		isValid = true;

		inputs.forEach(input => {
			if (!input.checkValidity()) {
				isValid = false;
			}
		})
		return isValid;
	}

	function resetInputs() {
		inputs.forEach(input => {
			input.value = '';
		})
	}

	function displayConfirm() {
		confirmPopup.classList.remove('opacity-0');

		setTimeout(() => {
			confirmPopup.classList.add('opacity-0');
		}, 5000);
	}

	function displayError() {
		errorPopup.classList.remove('opacity-0');

		setTimeout(() => {
			errorPopup.classList.add('opacity-0');
		}, 5000);
	}

	function displayInvalid() {
		invalidPopup.classList.remove('opacity-0');

		setTimeout(() => {
			invalidPopup.classList.add('opacity-0');
		}, 3000); 
	}
});