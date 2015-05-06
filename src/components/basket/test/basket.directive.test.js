(function () {
  'use strict';

  var moduleName = 'basket';

  describe('angularApp.components.' + moduleName + ' : directive', function () {
    var /*jshint unused:false */
        $compile,
        $rootScope,
        scope,
        template,
        element,
        controller;

    var elementClasses = {
      wrapper: '.basket',
      items: '.basket__items'
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
        '<app-basket></app-basket>'
      )(scope);

      scope.$digest();
    }));

    it('should insert a basket element in the DOM', function () {
      expect(element[0].querySelectorAll(elementClasses.wrapper).length).toEqual(1);
    });
    
    it('should contain a list of items', function () {
      expect(element[0].querySelectorAll(elementClasses.items).length).toEqual(1);
    });
  });
}());