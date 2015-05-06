(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name fitHeader
   */
  angular.module('angularApp.components.header')
    .directive('appHeader', Header);

  function Header () {

    var directive = {
      templateUrl: '/components/header/header.html',
      restrict: 'E',
      replace: false,
      scope: true
    };

    return directive;
  }
})();
