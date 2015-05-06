(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name apiService
   *
   * @description
   * Description here (supports markdown).
   */
  angular.module('angularApp.common.api')
      .factory('apiService', ApiService);

  function ApiService (
    $http,
    apiUrls
  ) {
    var service = {};

    service.menu = function meal () {
      return $http.get(apiUrls.menu);
    };
      
    service.restaurant = function meal () {
      return $http.get(apiUrls.restaurant);
    };
    
    return service;
  }
})();
