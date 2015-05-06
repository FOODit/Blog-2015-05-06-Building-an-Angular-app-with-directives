(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name fitMenu
   */
  angular.module('angularApp.components.menu')
    .directive('appMenu', Menu);

  function Menu () {

    var directive = {
      templateUrl: '/components/menu/menu.html',
      restrict: 'E',
      replace: false,
      controller: 'MenuController',
      controllerAs: 'vm',
      scope: {
        menu: '='
      }
    };

    return directive;
  }
})();
