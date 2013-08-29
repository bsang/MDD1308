function AppCtrl ($scope) {
	// Button Variables
	var home 		= document.getElementById('homeBtn');
	var designs 	= document.getElementById('designsBtn');
	var contact 	= document.getElementById('contactBtn');

	// Main Menu
	var menu 		= document.querySelector('.mainMenu');
	var nav			= document.querySelector('.nav');
	menu.onclick = function(e) {
		nav.style.display = 'block';

		home.onclick = function(e) {
			nav.style.display = 'none';
			e.preventDefault();
		}
		designs.onclick = function(e) {
			nav.style.display = 'none';
			e.preventDefault();
		}
		contact.onclick = function(e) {
			nav.style.display = 'none';
			e.preventDefault();
		}
		e.preventDefault();
	}
}

