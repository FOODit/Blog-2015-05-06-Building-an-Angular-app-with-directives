(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name <%= _.camelCase(moduleName) %>Service
   *
   * @description
   * Description here (supports markdown).
   */
  angular.module('angularApp.common.<%= _.camelCase(moduleName) %>')
      .factory('<%= _.camelCase(moduleName) %>Service', <%= _.capitalize(_.camelCase(moduleName)) %>Service);

  function <%= _.capitalize(_.camelCase(moduleName)) %>Service () {
    var service = {};

    return service;
  }
})();
