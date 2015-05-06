(function () {
  'use strict';

  var moduleName = 'restaurantInfo';

  describe('angularApp.components.' + moduleName + ' : directive', function () {
    var /*jshint unused:false */
        $compile,
        $rootScope,
        scope,
        template,
        element,
        controller;

    var elementClasses = {
      wrapper: '.restaurant-info',
      name: '.restaurant-info__name',
      description: '.restaurant-info__description'
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
        '<app-restaurant-info></app-restaurant-info>'
      )(scope);

      scope.$digest();
    }));

    it('should insert a restaurant-info element in the DOM', function () {
      expect(element[0].querySelectorAll(elementClasses.wrapper).length).toEqual(1);
    });
    
    it('should display the name', function () {
      expect(element[0].querySelectorAll(elementClasses.name).length).toEqual(1);
    });
    
    it('should display the description', function () {
      expect(element[0].querySelectorAll(elementClasses.description).length).toEqual(1);
    });
  });
}());