document.addEventListener('DOMContentLoaded', function() {

	const experiencesButton = document.getElementById('experiences-button');
	const formationsButton = document.getElementById('formations-button');

	const experiencesContainer = document.getElementById('experiences');
	const formationsContainer = document.getElementById('formations');

	const experiencesItems = document.querySelectorAll('.experiences-item');
	const formationsItems = document.querySelectorAll('.formations-item');

	const experiencesImages = document.querySelectorAll('.experiences-image');
	const formationsImages = document.querySelectorAll('.formations-image');

	function init() {
		experiencesButton.addEventListener('click', () => {toggleResume(true)});		
		formationsButton.addEventListener('click', () => {toggleResume(false)});
		
		experiencesItems.forEach(experience => {
			experience.addEventListener('click', () => {
				setActiveExperienceItem(experience);
			})
		})

		formationsItems.forEach(formation => {
			formation.addEventListener('click', () => {
				setActiveFormationItem(formation);
			})
		})
	}

	function setActiveExperienceItem(item) {
		experiencesItems.forEach(experience => {
			experience.classList.remove('active');
		})
		item.classList.add('active');

		experiencesImages.forEach(experience => {
			if (item.getAttribute("data-id") === experience.getAttribute("data-id")) {
				experience.classList.remove('hidden');
			} else {
				experience.classList.add('hidden');
			}
		})
	}

	function setActiveFormationItem(item) {
		formationsItems.forEach(formation => {
			formation.classList.remove('active');
		})
		item.classList.add('active');

		formationsImages.forEach(formation => {
			if(item.getAttribute("data-id") === formation.getAttribute('data-id')) {
				formation.classList.remove('hidden');
			} else {
				formation.classList.add('hidden');
			}
		})
	}

	function toggleResume(showExperience) {
		if (showExperience) {
			formationsContainer.classList.add('hidden');
			formationsContainer.classList.remove('flex');
	
			experiencesContainer.classList.add('flex');
			experiencesContainer.classList.remove('hidden');
	
			formationsButton.classList.remove('active');
			formationsButton.classList.add('text-darklight');
			formationsButton.classList.add('cursor-pointer');
			experiencesButton.classList.add('active');
			experiencesButton.classList.remove('text-darklight');
			experiencesButton.classList.remove('cursor-pointer');
		} else {
			formationsContainer.classList.add('flex');
			formationsContainer.classList.remove('hidden');
	
			experiencesContainer.classList.add('hidden');
			experiencesContainer.classList.remove('flex');
	
			formationsButton.classList.add('active');
			formationsButton.classList.remove('text-darklight');
			formationsButton.classList.remove('cursor-pointer');
			experiencesButton.classList.remove('active');
			experiencesButton.classList.add('text-darklight');
			experiencesButton.classList.add('cursor-pointer');
		}
	}

	init();	
});