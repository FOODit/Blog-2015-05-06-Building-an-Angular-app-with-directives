(function () {
  'use strict';

  var moduleName = '<%= _.camelCase(moduleName) %>';

  describe('angularApp.components.' + moduleName + ' : directive', function () {
    var /*jshint unused:false */
        $compile,
        $rootScope,
        scope,
        template,
        element,
        controller;

    var elementClasses = {
      wrapper: '.<%= _.kebabCase(moduleName) %>'
    };

    beforeEach(module('angularApp.test.templates'));
    beforeEach(module('angularApp.components.' + moduleName));

    beforeEach(inject(function (
      _$compile_,
      _$rootScope_
    ) {
      $compile = _$compile_;
      scope = _$rootScope_;

      element = $compile(
        '<app-<%= _.kebabCase(moduleName) %>></app-<%= _.kebabCase(moduleName) %>>'
      )(scope);

      scope.$digest();
    }));

    it('should insert a <%= _.kebabCase(moduleName) %> element in the DOM', function () {
      expect(element[0].querySelectorAll(elementClasses.wrapper).length).toEqual(1);
    });
  });
}());