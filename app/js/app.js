'use strict';

/* App Module */

var ecomApp = angular.module('ecomApp', [
  'ngRoute',
  'phonecatAnimations',

  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices'
]);

ecomApp.run(function($rootScope){
  $rootScope.shoppingcart = [];
  $rootScope.addToCart = function(item) {
    $rootScope.shoppingcart.push(item);
  }
  $rootScope.removeFromCart = function(item) {
    var index = $rootScope.shoppingcart.indexOf(item);
    if (index > -1) {
      if(confirm("Sure you want to remove "+item.name+" ?")){
        $rootScope.shoppingcart.splice(index, 1);
      }
    }    
  }  
})

ecomApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      when('/categories', {
        templateUrl: 'partials/categories.html',
        controller: 'CategoryCtrl'
      }).
      when('/shoppingcart', {
        templateUrl: 'partials/shoppingcart.html',
        controller: 'ShoppingCartCtrl'
      }).               
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).      
      otherwise({
        redirectTo: '/home'    
      });
  }]);
