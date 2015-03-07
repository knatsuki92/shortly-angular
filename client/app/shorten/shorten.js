angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function(){
    Links.createLink($scope.link)
    .then(function(link){
      $scope.link = link;
    })
    .catch(function(error){
      console.error(error);
    });
  };


});
