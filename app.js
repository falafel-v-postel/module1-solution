(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController)

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
$scope.lunchMenu = '';
$scope.menuMessage = '';

$scope.checkList = function () {
var menuLength = $scope.lunchMenu.split(',').length;

if ($scope.lunchMenu.toString().length == 0) {
  $scope.menuMessage = 'Please enter data first';
} else if (menuLength > 3) {
$scope.menuMessage = 'Too much!';
} else {
$scope.menuMessage = 'Enjoy!';
}
}
}
})();
