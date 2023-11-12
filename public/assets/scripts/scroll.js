document.addEventListener('DOMContentLoaded', function() {

	const scrollUpButton = document.getElementById("scroll-up");
	const navbar = document.getElementById("navbar");

	window.addEventListener('scroll', () => {
		if (window.scrollY > 100 ) {
			displayItems();
		} else {
			hideItems()
		}
	})

	scrollUpButton.addEventListener("click", () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	});

	function displayItems() {
		scrollUpButton.classList.remove('opacity-0');

		navbar.classList.add('bg-dark');
		navbar.classList.add('shadow-md');
	}

	function hideItems() {
		scrollUpButton.classList.add('opacity-0');

		navbar.classList.remove('bg-dark');
		navbar.classList.remove('shadow-md');
	}
})