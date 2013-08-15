function AppCtrl ($scope) {
  
	$scope.setActive = function (type) {
	    $scope.homeActive = '';
	    $scope.productsActive = '';
	    $scope.designActive = '';
	    $scope.contactsActive = '';

	    $scope[type + 'Active'] = 'active';
	}

 	$scope.menuTimer = function() {
		$scope.menuToggle = !$scope.menuToggle;
		$timeout(function() {
			$scope.menuToggle = false;
			console.log('inner');
		},1000);
		console.log('outter');
	}
}

var search = document.getElementById('searchBtn');