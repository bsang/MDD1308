angular.module('customTshirt', []).config(function($routeProvider, $locationProvider){
	$routeProvider.when('/', {
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

	// .when('/create_shirt', {
	// 	templateUrl	: 'views/create_shirt.html',
	// 	controller	: 'CreateTshirt',
	// 	authRequired: true;
	// });
});

function Home ($scope, $routeParams) {
	
}

function Products ($scope, $routeParams) {
	
}

function Registration ($scope, $routeParams) {
	
}

function DesignIdea ($scope, $routeParams) {
	
}