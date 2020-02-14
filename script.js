document.addEventListener('click', function (event) {
	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#not-done')) return;
	// Don't follow the link
	event.preventDefault();
	// Log the clicked element in the console
	console.log("Hello");
}, false);