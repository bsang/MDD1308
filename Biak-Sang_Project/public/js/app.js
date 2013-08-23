angular.module('customTshirt', ['firebase'])

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

.run(['angularFireAuth', function(angularFireAuth) {

	angularFireAuth.initialize('https://customprints4me.firebaseio.com', {
		'name': 'user', 'path':'/'
	})
}])

.controller('Login', ['$scope', 'angularFireAuth', '$location', '$rootScope', function myCtrl($scope, angularFireAuth, $location, $rootScope){
	
	// Login with facebook
	$scope.fbLogin = function() {
		angularFireAuth.login('facebook').then(function() {
			// If the user login successfully it will take them to create shirt page
			$location.path('/login');
			console.log($rootScope.user);

			var fbUser = document.querySelector('.fbUserInfo');
			fbUser.style.display = "block";
			fbUser.children[0].src = "https://graph.facebook.com/"+$rootScope.user.id+"/picture?type=small";
			fbUser.children[1].innerHTML = $rootScope.user.displayName;
		});
	}

	// Login
	$scope.login = function() {
		angularFireAuth.login('password', $scope.user).then(function() {
			// If the user login successfully it will take them to create shirt page
			$location.path('/create_shirt');
		});
	}
}])

.controller('Registration', ['$scope', 'angularFireAuth', '$location', function myCtrl($scope, angularFireAuth, $location){

	$scope.location = $location;
	// if the user click on register take the following action
	$scope.register = function() {
		angularFireAuth.createUser($scope.user.email, $scope.user.password, function(user) {
			if(user) {
				$location.path('/create_shirt');
			}
		});

		$scope.user = {};
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
	var facebookPhoto = document.getElementById('fbPhoto');

	// CHANGING TSHIRT COLOR
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

	// function getBase64FromImageUrl(URL) {
	//     var img = new Image();
	//     img.src = URL;
	//     img.onload = function () {


	//     var canvas = document.createElement("canvas");
	//     canvas.width =this.width;
	//     canvas.height =this.height;

	//     var ctx = canvas.getContext("2d");
	//     ctx.drawImage(this, 0, 0);


	//     var dataURL = canvas.toDataURL("image/png");

	//     alert(  dataURL.replace(/^data:image\/(png|jpg);base64,/, ""));

	//     }
	// }
	$scope.shirt = {};
	$scope.update_image = function(picture)
	{
		var reader = new FileReader();

		reader.onload = function(readerEvt)
		{
			var binaryString = readerEvt.target.result;
			$scope.shirt.image = btoa(binaryString);
		}

		reader.readAsBinaryString(picture.files[0]);
	}

	
}

function DesignIdea ($scope, $routeParams) {
	
}