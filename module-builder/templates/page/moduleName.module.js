(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name <%= _.camelCase(moduleName) %>
   * @id angularApp.pages.<%= _.camelCase(moduleName) %>
   */
  angular.module('angularApp.pages.<%= _.camelCase(moduleName) %>', [
    'ui.router'
  ])
    .config(Route);

  function Route (
    $stateProvider
  ) {
      
    $stateProvider
      .state('<%= _.camelCase(moduleName) %>', {
        url: '/<%= _.kebabCase(moduleName) %>',
        templateUrl: '/pages/<%= _.camelCase(moduleName) %>/<%= _.camelCase(moduleName) %>.html',
        controller: '<%= _.capitalize(_.camelCase(moduleName)) %>PageController',
        controllerAs: 'vm'
      });
  }
})();
