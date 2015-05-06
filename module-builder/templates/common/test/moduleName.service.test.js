'use strict';

describe('<%= _.camelCase(moduleName) %>Service', function () {

  var <%= _.camelCase(moduleName) %>Service;

  beforeEach(module('angularApp.common.<%= _.camelCase(moduleName) %>'));

  beforeEach(inject(function (_<%= _.camelCase(moduleName) %>Service_) {
    <%= _.camelCase(moduleName) %>Service = _<%= _.camelCase(moduleName) %>Service_;
  }));

  it('should do stuff', function () {
    // Test
  });
});
