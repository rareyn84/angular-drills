angular.module('arrayApp').controller('arrayController', function($scope, mainService) {
  $scope.getUserData = function() {
    $scope.personData = mainService.getData
    ();
  }
  $scope.getUserData();

  $scope.test = "Word to your mother"
})
