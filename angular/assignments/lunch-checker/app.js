(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	// Initialize variables
	$scope.foodList = "";
	$scope.lunchState = "";
	
	$scope.checkLunch = function () {
		
		// If there's no data, prompt the user to enter data
		if ($scope.foodList === "") {
			$scope.lunchState = "Please enter data first";
			return;
		}
		
		// Split the comma-delimited list
		var foodArr = $scope.foodList.split(',');
		
		// Change input depending on length
		if (foodArr.length <= 3) {
			$scope.lunchState = "Enjoy!";
		} else if (foodArr.length > 3) {
			$scope.lunchState = "Too much!";
		}
	};
}

})();