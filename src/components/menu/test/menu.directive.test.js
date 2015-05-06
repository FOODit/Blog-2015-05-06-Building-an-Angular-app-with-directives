(function () {
  'use strict';

  var moduleName = 'menu';

  describe('angularApp.components.' + moduleName + ' : directive', function () {
    var /*jshint unused:false */
        $compile,
        $rootScope,
        scope,
        template,
        element,
        controller;

    var elementClasses = {
      wrapper: '.menu',
      title: '.menu__title',
      items: '.menu__items'
    };

    beforeEach(module('angularApp.test.templates'));
    beforeEach(module('angularApp.components.' + moduleName));

    beforeEach(inject(function (
      _$compile_,
      _$rootScope_
    ) {
      $compile = _$compile_;
      scope = _$rootScope_;
      
      angular.module('angularApp.components.' + moduleName)
        .constant('restaurantObj', {})
        .constant('menuObj', {});

      element = $compile(
        '<app-menu></app-menu>'
      )(scope);

      scope.$digest();
    }));

    it('should insert a menu element in the DOM', function () {
      expect(element[0].querySelectorAll(elementClasses.wrapper).length).toEqual(1);
    });
    
    it('should contain a title', function () {
      expect(element[0].querySelectorAll(elementClasses.title).length).toEqual(1);
    });
    
    it('should contain a list of items', function () {
      expect(element[0].querySelectorAll(elementClasses.items).length).toEqual(1);
    });
  });
}());