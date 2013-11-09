'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

phonecatControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

phonecatControllers.controller('HomeCtrl', ['$scope',
  function($scope) {
    $scope.greeting = "Welcome to SmartFingerGloves"
  }]);

phonecatControllers.controller('CategoryCtrl', ['$scope',
  function($scope) {
  }]);

phonecatControllers.controller('ShoppingCartCtrl', ['$rootScope','$scope',
  function($scope,$rootScope) {
  }]);