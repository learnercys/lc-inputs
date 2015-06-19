'use strict';

/**
 * @ngdoc directive
 * @name inputsApp.directive:lcInputs
 * @description
 * # lcInputs
 */
angular.module('inputsApp')
  .directive('lcInputs', function () {
    return {
      templateUrl: 'views/lcinputs.html',
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {

      }
    };
  });
