'use strict';

/* Controllers */

var ecomControllers = angular.module('ecomControllers', []);

ecomControllers.controller('GloveListCtrl', ['$scope', 'Glove',
  function($scope, Glove) {
    $scope.gloves = Glove.query();
    $scope.orderProp = 'price';
  }]);

ecomControllers.controller('GloveDetailCtrl', ['$scope', '$routeParams', 'Glove',
  function($scope, $routeParams, Glove) {
    $scope.glove = Glove.get({gloveId: $routeParams.gloveId}, function(glove) {
      $scope.mainImageUrl = glove.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

ecomControllers.controller('HomeCtrl', ['$scope','$http',
  function($scope, $http) {
    $scope.greeting = "Welcome to SmartFingerGloves"
    $('#myCarousel').carousel({pause: "hover"});
    //http testing
    $scope.data = "unknown";
    //$http.jsonp('http://api.simpleupc.com&callback=JSON_CALLBACK', {params: {'upc':'049000042566', 'method':'FetchProductByUPC', 'auth':'h5OcDMew9G82bTt1TFBZTfDO930AeHlq'}}).success(function(data){
    $http.jsonp('http://api.simpleupc.com/v1.php?upc=049000042566&method=FetchProductByUPC&auth=h5OcDMew9G82bTt1TFBZTfDO930AeHlq&Content-Type=text/json&callback=JSON_CALLBACK').success(function(data){  
    //$http.get('http://api.simpleupc.com?upc=049000042566&method=FetchProductByUPC&auth=h5OcDMew9G82bTt1TFBZTfDO930AeHlq&Content-Type=text/json').success(function(data){  
      $scope.data = data;
      alert("success " + $scope.data);
    }).error(function(data){
      alert("error " + data);
    });

  }]);

ecomControllers.controller('CategoryCtrl', ['$scope', '$routeParams', 'Glove',
  function($scope, $routeParams, Glove) {
    $scope.gloves = Glove.query();
    $scope.orderProp = 'price';
    $scope.query = $routeParams.type;
}]);

ecomControllers.controller('ShoppingCartCtrl', ['$rootScope','$scope',
  function($scope,$rootScope) {
    angular.forEach($rootScope.shoppingcart, function(value, key){
      $rootScope.cartTotal += value.price;
    });
  }]);