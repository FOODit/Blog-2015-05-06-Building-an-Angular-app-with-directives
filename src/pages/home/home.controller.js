(function () {
  'use strict';

  /**
   * @ngdoc controller
   * @name HomePageController
   */
  angular.module('angularApp.pages.home')
    .controller('HomePageController', HomePageController);

  function HomePageController (
    $rootScope,
    restaurantObj,
    menuObj
    // Dependencies here
  ) {
    var vm = this;

    vm.restaurant = restaurantObj.data;
    vm.menu = menuObj.data;
    
  /**
   * @ngdoc object
   * @name init
   * @methodOf HomePageController
   * @description Runs when the controller is instanced.
   */
    vm.init = function () {
    };

    vm.init();
  }
})();
