(function () {
  'use strict';

  /**
   * @ngdoc controller
   * @name <%= _.capitalize(_.camelCase(moduleName)) %>Controller
   */
  angular.module('angularApp.components.<%= _.camelCase(moduleName) %>')
    .controller('<%= _.capitalize(_.camelCase(moduleName)) %>Controller', <%= _.capitalize(_.camelCase(moduleName)) %>Controller);

  function <%= _.capitalize(_.camelCase(moduleName)) %>Controller (
    // Dependencies here
  ) {
    var vm = this;

    /**
     * @ngdoc object
     * @name init
     * @methodOf <%= _.capitalize(_.camelCase(moduleName)) %>Controller
     * @description Runs every time the controller is instanced.
     */
    vm.init = function init () {

    };

    vm.init();
  }
})();
