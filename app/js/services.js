'use strict';

/* Services */

var ecomServices = angular.module('ecomServices', ['ngResource']);

ecomServices.factory('Glove', ['$resource',
  function($resource){
    return $resource('gloves/:gloveId.json', {}, {
      query: {method:'GET', params:{gloveId:'gloves'}, isArray:true}
    });
  }]);


