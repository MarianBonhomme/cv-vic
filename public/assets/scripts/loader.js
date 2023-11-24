window.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
	const content = document.getElementById('content');

	loader.style.display = 'flex';

    setTimeout(() => {
        loader.style.display = 'none';
        content.style.display = 'block';
    }, 5000);
});