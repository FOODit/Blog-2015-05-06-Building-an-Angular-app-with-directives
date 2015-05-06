(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name fitRestaurantInfo
   */
  angular.module('angularApp.components.restaurantInfo')
    .directive('appRestaurantInfo', RestaurantInfo);

  function RestaurantInfo () {

    var directive = {
      templateUrl: '/components/restaurantInfo/restaurantInfo.html',
      restrict: 'E',
      replace: false,
      scope: {
        restaurant: '='
      }
    };

    return directive;
  }
})();
