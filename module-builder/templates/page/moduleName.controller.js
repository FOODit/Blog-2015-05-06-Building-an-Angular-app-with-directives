(function () {
  'use strict';

  /**
   * @ngdoc controller
   * @name <%= _.capitalize(_.camelCase(moduleName)) %>PageController
   */
  angular.module('angularApp.pages.<%= _.camelCase(moduleName) %>')
    .controller('<%= _.capitalize(_.camelCase(moduleName)) %>PageController', <%= _.capitalize(_.camelCase(moduleName)) %>PageController);

  function <%= _.capitalize(_.camelCase(moduleName)) %>PageController (
    $rootScope
    // Dependencies here
  ) {
    var vm = this;

  /**
   * @ngdoc object
   * @name init
   * @methodOf <%= _.capitalize(_.camelCase(moduleName)) %>PageController
   * @description Runs when the controller is instanced.
   */
    vm.init = function init () {
    };

    vm.init();
  }
})();
