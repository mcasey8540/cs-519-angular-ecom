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