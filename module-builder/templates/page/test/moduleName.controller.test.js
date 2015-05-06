(function () {
  'use strict';

  describe('angularApp.pages.<%= _.camelCase(moduleName) %> : controller', function () {

    var scope,
        dependencies,
        createController,
        vm;

    beforeEach(module('angularApp.pages.<%= _.camelCase(moduleName) %>'));

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
          '<%= _.capitalize(_.camelCase(moduleName)) %>PageController as vm',
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
