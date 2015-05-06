(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name fitBasket
   */
  angular.module('angularApp.components.basket')
    .directive('appBasket', Basket);

  function Basket () {

    var directive = {
      templateUrl: '/components/basket/basket.html',
      restrict: 'E',
      replace: false,
      controller: 'BasketController',
      controllerAs: 'vm',
      scope: true
    };

    return directive;
  }
})();
