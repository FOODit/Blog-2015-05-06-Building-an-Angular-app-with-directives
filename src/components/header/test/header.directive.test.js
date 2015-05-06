(function () {
  'use strict';

  var moduleName = 'header';

  describe('angularApp.components.' + moduleName + ' : directive', function () {
    var /*jshint unused:false */
        $compile,
        $rootScope,
        scope,
        template,
        element,
        controller;

    var elementClasses = {
      wrapper: '.header',
      basket: '.header__basket'
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
        '<app-header></app-header>'
      )(scope);

      scope.$digest();
    }));

    it('should insert a header element in the DOM', function () {
      expect(element[0].querySelectorAll(elementClasses.wrapper).length).toEqual(1);
    });
    
    it('should contain a basket', function () {
      expect(element[0].querySelectorAll(elementClasses.basket).length).toEqual(1);
    });
  });
}());