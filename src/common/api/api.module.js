(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name api
   * @id angularApp.common.api
   */
  angular.module('angularApp.common.api', [
    // Dependencies here
  ])
  
    .constant('apiUrls', {
      menu: '/data/menu.json',
      restaurant: '/data/restaurant.json'
    });
})();
