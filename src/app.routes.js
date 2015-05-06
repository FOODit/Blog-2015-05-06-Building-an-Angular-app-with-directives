(function () {
  'use strict';

  angular
    .module('angularApp')
    .config(Routes);

  function Routes (
    $locationProvider,
    $urlRouterProvider
  ) {
    $locationProvider
      .html5Mode(true)
      .hashPrefix('!');

    $urlRouterProvider.otherwise('/');
  }
})();