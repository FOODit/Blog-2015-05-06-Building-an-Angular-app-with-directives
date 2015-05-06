(function () {
  'use strict';

  /**
   * @ngdoc controller
   * @name MenuController
   */
  angular.module('angularApp.components.menu')
    .controller('MenuController', MenuController);

  function MenuController (
    $scope
  ) {
    var vm = this;
    
    vm.addToBasket = addToBasket;
    
    function addToBasket (dish) {
      $scope.$emit('basket:addItem', dish);
    }
  }
})();
