'use strict';

/* App Module */

var ecomApp = angular.module('ecomApp', [
  'ngRoute',
  'ecomAnimations',
  'ecomControllers',
  'ecomFilters',
  'ecomServices'
]);

ecomApp.run(function($rootScope){

  $rootScope.shoppingcart = [];
  $rootScope.shoppingcart.total = 0;
  
  $rootScope.addToCart = function(item) {
    $rootScope.shoppingcart.push(item);
    $rootScope.calculateTotal();
  }

  $rootScope.removeFromCart = function(item) {
    var index = $rootScope.shoppingcart.indexOf(item);
    if (index > -1) {
      if(confirm("Sure you want to remove "+item.name+" ?")){
        $rootScope.shoppingcart.splice(index, 1);
      }
    }
    $rootScope.calculateTotal();   
  }  

  $rootScope.calculateTotal = function(){
    $rootScope.shoppingcart.total = 0;
    angular.forEach($rootScope.shoppingcart, function(value, key){
      $rootScope.shoppingcart.total += value.price;
    });   
  }
  $rootScope.siteVersion = (Math.random() < .5) ? "a" : "b";
  console.log($rootScope.siteVersion);
})

ecomApp.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $routeProvider.
      when('/gloves', {
        templateUrl: 'partials/glove-list.html',
        controller: 'GloveListCtrl'
      }).
      when('/gloves/:gloveId', {
        templateUrl: 'partials/glove-detail.html',
        controller: 'GloveDetailCtrl'
      }).            
      when('/categories', {
        templateUrl: 'partials/categories.html',
        controller: 'CategoryCtrl'
      }).
      when('/categoriesb', {
        templateUrl: 'partials/categoriesb.html',
        controller: 'CategoryCtrl'
      }).      
      when('/categories/:type', {
        templateUrl: 'partials/glove-list.html',
        controller: 'CategoryCtrl'
      }).      
      when('/shoppingcart', {
        templateUrl: 'partials/shoppingcart.html',
        controller: 'ShoppingCartCtrl'
      }).
      //change before submission partials/shoppingcart.html
      when('/shoppingcartb', {
        templateUrl: 'partials/shoppingcart.html',
        controller: 'ShoppingCartCtrl'
      }).
      when('/checkout', {
        templateUrl: 'partials/checkout.html',
        controller: 'CheckoutCtrl'
      }).                           
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'HomeCtrl'
      }).
      when('/orderconfirmation', {
        templateUrl: 'partials/order-confirmation.html',
        controller: 'OrderConfirmationCtrl'
      }).             
      otherwise({
        redirectTo: '/categories'    
      });
  }]);
