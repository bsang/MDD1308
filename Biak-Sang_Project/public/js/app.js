/*
	App: CustomPrints4me
	Developer: Biak Sang
	Class: MDD_1308
*/

// Store Configuration Data
var configData = {
	// PageURLs
	pageUrls: {
		homePage			: 	"views/home.html", 			// home page url
		loginPage			: 	"views/login.html", 		// login page url
		registrationPage 	: 	"views/registration.html",	// registration page url
		designsPage 		: 	"views/designs.html",		// designs page url
		createShirtPage 	: 	"views/create_shirt.html", 	// create shirt page url
		contactPage			: 	"views/contact.html"
	},

	// Page Location or Path
	partials: {
		homePath			: 	"/", 						// home page path
		loginPath			: 	"/login/:type", 			// login page path
		registrationPath	: 	"/registration", 			// registration page path
		designsPath 		: 	"/designs", 				// design page path
		createShirtPath 	: 	"/create_shirt", 			// create shirt page path
		contactPath 		: 	"/contact"
	},

	// Controllers
	controllers: {
		homeCtl 			: 	"Home", 					// home controller
		loginCtl 			: 	"Login", 					// login controller
		registerCtl 		: 	"Registration",	 			// registration controller
		designsCtl	 		: 	"Designs", 					// design controller
		createShirtCtl 		: 	"CreateTshirt", 			// create tshirt controller
		contactCtl 			: 	"Contact"
	},

	// Image URLs
	imgUrls: {
		blueShirtColor		: 	"img/blue-shirt.png", 		// blue shirt color img url
		whiteShirtColor		: 	"img/white-shirt.png",		// white shirt color img url
		redShirtColor		: 	"img/red-shirt.png", 		// red shirt color img url
		greenShirtColor		: 	"img/green-shirt.png", 		// green shirt color img url
		femaleBlueShirt		: 	"img/blue-shirt-female.png",// female blue shirt img url
		femaleGreenShirt	: 	"img/green-shirt-female.png",//female green shirt color img url
		femalePinkShirt		: 	"img/pink-shirt-female.png",// female pink shirt color img url
		femaleWhiteShirt	: 	"img/white-shirt-female.png"// female white shirt color img url

	},

	auth: {
		firebaseURL			: 	"https://customprints4me.firebaseio.com" // firebase database URL
	}
};

angular.module('customTshirt', ['firebase'])

.config(['$routeProvider', function(route){
	// router
	route

	.when(configData.partials.homePath, {
		templateUrl	: configData.pageUrls.homePage,
		// set the controller Home
		controller	: configData.controllers.homeCtl,
		// User doesn't require to Login to view this page
		authRequired: false
	})

	.when(configData.partials.loginPath, {
		templateUrl	: configData.pageUrls.loginPage,
		// set the controller Login
		controllers : configData.controllers.loginCtl,
		// User doesn't require to Login to view this page
		authRequired: false
	})

	.when(configData.partials.registrationPath, {
		templateUrl	: configData.pageUrls.registrationPage,
		// set the controller Registration
		controller	: configData.controllers.registerCtl,
		// User doesn't require to Login to view this page
		authRequired: false 
	})

	.when(configData.partials.designsPath, {
		templateUrl	: configData.pageUrls.designsPage,
		// set the controller Products
		controller	: configData.controllers.designsCtl,
		// User doesn't require to Login to view this page
		authRequired: false
	})

	.when(configData.partials.createShirtPath, {
		templateUrl	: configData.pageUrls.createShirtPage,
		// set the controller CreateTshirt
		controller	: configData.controllers.createShirtCtl,
		// User required them to Login to create Custom TShirt
		authRequired: true
	})

	.when(configData.partials.contactPath, {
		templateUrl	: configData.pageUrls.contactPage,
		// set the controller for Contact
		controller	: configData.controllers.contactCtl,
		// User doesn't require to Login to view this page
		authRequired: false
	});
}])

.run(['angularFireAuth', function(angularFireAuth) {

	angularFireAuth.initialize(configData.auth.firebaseURL, {
		'name': 'user', 'path':"/login/shirt"
	})
}])

// make a controller for Login and run a myCtrl function
.controller('Login', ['$scope', 'angularFireAuth', '$location', '$rootScope','$routeParams', function($scope, angularFireAuth, $location, $rootScope,$routeParams){
	// Login with facebook
	$scope.$on("angularFireAuth:login", function(evt, user) {
  	// User logged in.
  		$location.path('/create_shirt');
	});
	
	$scope.fbLogin = function() {
		// when the user login successfully then run the following function
		angularFireAuth.login('facebook').then(function(fbData) {
			// If the user login successfully it will take them to create shirt page
			if($routeParams.type == "shirt")
			{
				$location.path('/create_shirt');
			}
			else if($routeParams.type == "design")
			{
				$location.path('/designs');
				console.log(type);
			}
			
		});
	}

	// Login with Email and password
	$scope.login = function() {
		// if the user pass the right email address and password then login successfully
		angularFireAuth.login('password', $scope.user).then(function() {
			// If the user login successfully it will take them to create shirt page
			$location.path(configData.partials.createShirtPath);
		});
	}

	// Check if the user is login
	$scope.$on("angularFireAuth:fbLogin", function(evt, user) {
		console.log("User Login", user);
	})
}])

.controller('Registration', ['$scope', 'angularFireAuth', '$location', function myCtrl($scope, angularFireAuth, $location){
	// set $scope.location to $location
	$scope.location = $location;
	// if the user click on register take the following action
	$scope.register = function() {
		angularFireAuth.createUser($scope.user.email, $scope.user.password, function(user) {
			if(user) {
				$location.path(configData.partials.createShirtPath);
			}
		});

		$scope.user = {};
	}

}])

// Home
.controller('Home', ['$scope', 'angularFireCollection', 'angularFireAuth', '$location', function myCtrl($scope, angularFireCollection, angularFireAuth, $location){
	
}])

// Create Shirt function
.controller('CreateTshirt', ['$scope', function myCtrl($scope){

	// Main Tshirt
	var customTShirtColor 	= document.querySelector('.customShirt');

	// CHANGING TSHIRT COLOR
	// Change the t-shirt color to blue
	$scope.blueShirt = function() {
		// Change the t-shirt color to blue
		customTShirtColor.style.background = "url("+configData.imgUrls.blueShirtColor+")";
	}
	// Change the t-shirt color to white
	$scope.whiteShirt= function() {
		// Change the image source to white shirt picture
		customTShirtColor.style.background = "url("+configData.imgUrls.whiteShirtColor+")";
	}
	// Change the t-shirt color to red
	$scope.redShirt = function() {
		// Change the image source to red shirt picture
		customTShirtColor.style.background = "url("+configData.imgUrls.redShirtColor+")";
	}
	// Change the t-shirt color to green
	$scope.greenShirt = function() {
		// Change the image source to green shirt picture
		customTShirtColor.style.background = "url("+configData.imgUrls.greenShirtColor+")";
	}

	// set $scope.shirt to empty object
	$scope.shirt = {};

	// make update image function so that when the new image is select it will replace it
	$scope.update_image = function(picture)
	{
		// make a reader variable for FileReader
		var reader = new FileReader();
		// When the reader is load run the following funcation
		reader.onload = function(readerEvt)
		{
			var binaryString = readerEvt.target.result;
			$scope.shirt.image = btoa(binaryString);
			var canvas = document.getElementById('pictureCanvas');
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			// make context variable and pass the context into canvas ans pass an arguement of "2d"
			var context = canvas.getContext("2d");
			// make a new varible for new Image
		    var tshirtObj = new Image();

		    data =  "data:image/png;base64," + btoa(binaryString);
		    // when the new image is load run the following function
		    tshirtObj.onload = function() {
		    	// add a new image with a position of 0 0
		    	context.drawImage(tshirtObj, 74, 40, 80, 80);
		    	console.log(context);
		    }

		    tshirtObj.src = data;
		}

		reader.readAsBinaryString(picture.files[0]);
	}
	
}])

.controller('Designs', ['$scope', 'angularFireCollection', 'angularFireAuth', function myCtrl($scope, angularFireCollection, angularFireAuth){
	// Create New Design variable
	var createNew = document.querySelector('.createNew');
	// Create Shirt Form variable
	var createNewShirtForm = document.querySelector('.createNewShirtForm');
	// Firebase Database URL
	var url = "https://customprints4me.firebaseio.com/productsList";
	$scope.shirts = angularFireCollection(url, $scope, 'shirts', []);
	// If the user Click on Add Design button run the following function
	$scope.addDesign = function() {
		createNewShirtForm.style.display = 'block';
		createNew.style.display = 'none';
		// Click Add New Design button
		$scope.addNewDesign = function() {
			// Add ImageURL, design title, and author to database
			$scope.shirts.add({imgUrl: $scope.shirt.imgUrl, designTitle: $scope.shirt.designTitle, designer: $scope.shirt.designer});
			createNewShirtForm.style.display = 'none';
			createNew.style.display = 'block';
			// Set imgurl, design title, and designer input field empty
			$scope.shirt.imgUrl = '';
			$scope.shirt.designTitle = '';
			$scope.shirt.designer = '';
		}
	}

}])