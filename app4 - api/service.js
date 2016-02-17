angular.module('apiApp').service('apiService', function ($http, $q) {
  this.getPlanetData = function() {
    return $http({
      method: 'GET',
      url: "http://swapi.co/api/planets/"
    })
  };

  this.getPlanetData();
});
