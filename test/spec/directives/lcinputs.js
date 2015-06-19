'use strict';

describe('Directive: lcInputs', function () {

  // load the directive's module
  beforeEach(module('inputsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<lc-inputs></lc-inputs>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the lcInputs directive');
  }));
});
