'use strict';

/* Services */

var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);

phonecatServices.factory('Glove', ['$resource',
  function($resource){
    return $resource('gloves/:gloveId.json', {}, {
      query: {method:'GET', params:{gloveId:'gloves'}, isArray:true}
    });
  }]);
