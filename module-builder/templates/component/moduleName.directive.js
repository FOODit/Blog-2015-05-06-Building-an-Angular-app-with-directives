(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name fit<%= _.capitalize(_.camelCase(moduleName)) %>
   */
  angular.module('angularApp.components.<%= _.camelCase(moduleName) %>')
    .directive('app<%= _.capitalize(_.camelCase(moduleName)) %>', <%= _.capitalize(_.camelCase(moduleName)) %>);

  function <%= _.capitalize(_.camelCase(moduleName)) %> () {

    var directive = {
      templateUrl: '/components/<%= _.camelCase(moduleName) %>/<%= _.camelCase(moduleName) %>.html',
      restrict: 'E',
      replace: false,
      controller: '<%= _.capitalize(_.camelCase(moduleName)) %>Controller',
      controllerAs: 'vm',
      scope: true
    };

    return directive;
  }
})();
