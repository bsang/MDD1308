
// Define Angular Module
angular.module('chat', ['firebase'])

// Core Controller, Scope of all sub Controller
.controller('Core', ['$scope', 'angularFireCollection', function myCtrl($scope, angularFireCollection) {
	// todo: unify all URLs through a BaseURL defined here
	var url = 'https://fullsail.firebaseio.com/chat';

	// Grab the Course from the Database
	$scope.messages = angularFireCollection(url, $scope, 'msgs',[]);
	$scope.addMsg = function() {

		$scope.messages.add({name: fbUser.name, text: $scope.MsgInput});
		$scope.MsgInput = "";
	}

	var fbUser;

	var myCnn = new Firebase('https://fullsail.firebaseio.com/chat');

	// instance of firebase connection to login with 
	var auth 	= new FirebaseSimpleLogin(myCnn, function(error, user) {
	  console.log('Hey We\'re in', user);
	  fbUser = user;
	});

	$scope.login = function() {
		auth.login('faceboook');
	};

}]);