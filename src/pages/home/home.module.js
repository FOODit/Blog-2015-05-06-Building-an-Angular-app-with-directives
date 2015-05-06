(function () {
  'use strict';

  /**
   * @ngdoc overview
   * @name home
   * @id angularApp.pages.home
   */
  angular.module('angularApp.pages.home', [
    'ui.router',
    'angularApp.common.api',
    'angularApp.components.header',
    'angularApp.components.menu',
    'angularApp.components.restaurantInfo'
  ])
    .config(Route);

  function Route (
    $stateProvider
  ) {
      
    $stateProvider
      .state('home', {
        url: '/',
      
        views: {
          header: {
            templateUrl: '/components/header/header.html'
          },
          
          content: {
            templateUrl: '/pages/home/home.html',
            controller: 'HomePageController',
            controllerAs: 'vm'
          }
        },
      
        resolve: {
          restaurantObj: function (apiService) {
            return apiService.restaurant();
          },
          
          menuObj: function (apiService) {
            return apiService.menu();
          }
        }
      });
  }
})();
