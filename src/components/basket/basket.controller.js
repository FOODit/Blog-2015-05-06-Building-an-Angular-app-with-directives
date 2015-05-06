(function () {
  'use strict';

  /**
   * @ngdoc controller
   * @name BasketController
   */
  angular.module('angularApp.components.basket')
    .controller('BasketController', BasketController);

  function BasketController (
    $rootScope,
    $scope
  ) {
    var vm = this;
      
    vm.basketItems = {};
    vm.total = 0;

    vm.init = init;
    vm.addItem = addItem;    
    vm.removeItem = removeItem;
      
    function init () {
      attachEventListeners();
    };
      
    function addItem (item) {
      var basketItem;
      
      if (isItemValid(item)) {
        basketItem = vm.basketItems[item.id];
        
        if (basketItem) {
          basketItem.quantity += 1;
        } else {
          vm.basketItems[item.id] = item;
          vm.basketItems[item.id].quantity = 1;
        }
        
        vm.total += item.price;
      }
    };
      
    function removeItem (item) {
      var basketItem = vm.basketItems[item.id];
      
      if (basketItem.quantity > 1) {
        basketItem.quantity -= 1;
      } else {
        delete vm.basketItems[item.id];
      }
      
      vm.total -= item.price;
    };
      
    function isItemValid (item) {
      return _.isObject(item) &&
        _.isString(item.id) &&
        _.isString(item.name) &&
        _.isNumber(item.price);
    };
    
    function attachEventListeners () {
      $rootScope.$on('basket:addItem', function (event, item) {
        addItem(item);
      });
    };

    init();
  }
})();
