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

function CheckoutCtrl($rootScope,$scope){

    $scope.creditCardNumber = '';
    //credit card opacities 
    $scope.creditCardOpacities={}
    $scope.creditCardOpacities['amexCardOpacity'] = 0.5;
    $scope.creditCardOpacities['mastercardCardOpacity'] = 0.5;
    $scope.creditCardOpacities['visaCardOpacity'] = 0.5;
    $scope.creditCardOpacities['discoverCardOpacity'] = 0.5;

    $scope.$watch('creditCardNumber', function() {
      switch($scope.creditCardNumber.substr(0,1))
      {
      case "3":
        $scope.creditCardOpacities['amexCardOpacity'] = 1;
        resetOpacities('amexCardOpacity');
        break;
      case "4":
        $scope.creditCardOpacities['visaCardOpacity'] = 1;
        resetOpacities('visaCardOpacity');
        break;
      case "5":
        $scope.creditCardOpacities['mastercardCardOpacity'] = 1;
        resetOpacities('mastercardCardOpacity');
        break;
      case "6":
        $scope.creditCardOpacities['discoverCardOpacity'] = 1;
        resetOpacities('discoverCardOpacity');
        break;               
      default:
        resetOpacities();;
      }
    });

    var resetOpacities = function(choice){
      angular.forEach($scope.creditCardOpacities, function(value, key) {
        if (key != choice){
          $scope.creditCardOpacities[key] = 0.5;
        }
      });
    }    
  }
