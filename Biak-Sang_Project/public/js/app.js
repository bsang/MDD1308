angular.module('customTshirt', [])

// Router
.config(['$routeProvider', function(route){
	
	route
	.when('/', {
		templateUrl	: 'views/home.html',
		controller	: 'Home',
		authRequired: false
	})

	.when('/login', {
		templateUrl: 'views/login.html',
		controller:'Login',
		authRequired: false
	})

	.when('/registration', {
		templateUrl	: 'views/registration.html',
		controller	: "Registration",
		authRequired: false 
	})

	.when('/products', {
		templateUrl	: 'views/products.html',
		controller	: 'Products',
		authRequired: false
	})

	.when('/design_idea', {
		templateUrl	: 'views/design_idea.html',
		controller	: 'DesignIdea',
		authRequired: false
	})

	.when('/create_shirt', {
		templateUrl	: 'views/create_shirt.html',
		controller	: 'CreateTshirt',
		authRequired: false
	});
}])

.controller('Login', ['$scope', 'angularFireCollection', function myCtrl($scope, angularFireCollection){
	
	var url = 'https://customprints4me.firebaseio.com';
	var fbUser;
	var myConnection = new Firebase('https://customprints4me.firebaseio.com');

	var auth = new FirebaseSimpleLogin(myConnection, function(error, user) {
		console.log('Successfully Login with facebook', user);
		fbUser = user;
	});

	$scope.fbLogin = function(e) {
		auth.login('facebook');
		e.preventDefault();
	}

}]);

// Home
function Home ($scope, $routeParams) {
	
}

// Products
function Products ($scope, $routeParams) {
	
}

// Create Shirt function
function CreateTshirt ($scope, $routeParams) {

	var blue 	= document.querySelector('.blueShirt');
	var white 	= document.querySelector('.whiteShirt');
	var red 	= document.querySelector('.redShirt');
	var green 	= document.querySelector('.greenShirt');

	// Change the t-shirt color to blue
	blue.onclick = function(e) {
		document.querySelector('.tShirtCanvasColor').src = 'img/blue-shirt.png';
		e.preventDefault();
	}
	
	// Change the t-shirt color to white
	white.onclick = function(e) {
		document.querySelector('.tShirtCanvasColor').src = 'img/white-shirt.png';
		e.preventDefault();
	}
	
	// Change the t-shirt color to red
	red.onclick = function(e) {
		document.querySelector('.tShirtCanvasColor').src = 'img/red-shirt.png';
		e.preventDefault();
	}

	// Change the t-shirt color to green
	green.onclick = function(e) {
		document.querySelector('.tShirtCanvasColor').src = 'img/green-shirt.png';
		e.preventDefault();
	}
}

function Registration ($scope, $routeParams) {

}

function DesignIdea ($scope, $routeParams) {
	
}