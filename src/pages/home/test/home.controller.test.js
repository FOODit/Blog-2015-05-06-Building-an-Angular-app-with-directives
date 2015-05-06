(function () {
  'use strict';

  describe('angularApp.pages.home : controller', function () {

    var scope,
        dependencies,
        createController,
        vm;

    beforeEach(module('angularApp.pages.home'));

    beforeEach(inject(function (
      $controller,
      $rootScope,
      _$rootScope_
    ) {
      scope = $rootScope.$new();

      dependencies = {
        $scope: scope,
        $rootScope: _$rootScope_
        // Inject other dependencies here
      };

      // createController is called at the beginning of each test suite and
      // can take an object with optional mocked dependencies
      createController = function (mockDependencies) {
        mockDependencies = mockDependencies || {};

        return $controller(
          'HomePageController as vm',
          _.defaults(mockDependencies, dependencies)
        );
      };
    }));

    afterEach(function () {
    });

    describe('any method', function () {
      beforeEach(function () {
        vm = createController();
      });

      it('should do stuff', function () {
        // Test, please
      });
    });
  });
}());
