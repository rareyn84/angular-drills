angular.module('apiApp').controller('apiController', function($scope, apiService) {
  $scope.getPlanets = function() {
    apiService.getPlanetData().then(function(data) {
      $scope.planets = data.data.results;
      console.log(data.data.results);
    });
  }
  $scope.getPlanets();
})
