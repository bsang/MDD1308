function AppCtrl ($scope) {

 // 	$scope.menuTimer = function() {
	// 	$scope.menuToggle = !$scope.menuToggle;
	// 	$timeout(function() {
	// 		$scope.menuToggle = false;
	// 		console.log('inner');
	// 	},1000);
	// 	console.log('outter');
	// }

	// Button Variables
	var home 		= document.getElementById('homeBtn');
	var product 	= document.getElementById('productBtn');
	var designIdea 	= document.getElementById('designIdeaBtn');
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
		product.onclick = function(e) {
			nav.style.display = 'none';
			e.preventDefault();
		}
		designIdea.onclick = function(e) {
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

