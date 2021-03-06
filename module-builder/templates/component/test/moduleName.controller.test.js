(function () {
  'use strict';

  describe('angularApp.components.<%= _.camelCase(moduleName) %> : controller', function () {

    var scope,
        dependencies,
        createController,
        vm;

    beforeEach(module('angularApp.components.<%= _.camelCase(moduleName) %>'));

    beforeEach(inject(function (
      $controller,
      $rootScope
    ) {
      scope = $rootScope.$new();

      dependencies = {
        $scope: scope
        // Inject other dependencies here
      };

      // createController is called at the beginning of each test suite and
      // can take an object with optional mocked dependencies
      createController = function (mockDependencies) {
        mockDependencies = mockDependencies || {};

        return $controller(
          '<%= _.capitalize(_.camelCase(moduleName)) %>Controller as vm',
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
