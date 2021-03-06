angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.hasSubmitted = false;

  $scope.addLink = function(){
    Links.createLink($scope.link)
    .then(function(link){
      $scope.link = link;
    })
    .catch(function(error){
      console.error(error);
    });

    $scope.hasSubmitted = true;
  };

  $scope.notValid = function(){
    if ($scope.link.url !== undefined){
      return $scope.link.url.$dirty && $scope.link.url.$invalid;
    }
    return true;
  };


});
