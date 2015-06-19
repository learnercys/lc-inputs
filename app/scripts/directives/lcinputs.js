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
      replace: true,
      scope: {
        options: '=lcInputs'
      },
      link: function postLink(scope, element, attrs) {

        scope.newInput = {
          model: '',
          width: 100,
          height: 20,
          focus: true
        };

        scope.deleteInput = function ( $index ) {
         scope.options.inputs.splice($index, 1);
        };

        scope.$watch('newInput.model', function ( newValue ) {
          if( newValue.substr(newValue.length - 1, 1) === scope.options.breakPoint ) {
            scope.options.inputs.push(newValue.substr(0,newValue.length - 1));
            scope.newInput.model = '';
          }
        });

        /* see if has a breakPoint defined*/
        if( angular.isUndefined( scope.options.breakPoint ) ) {
          scope.options.breakPoint = ',';
        }

        /* see if has a collection defined */
        if( angular.isUndefined( scope.options.inputs ) ) {
          scope.options.inputs = [];
        }

      }
    };
  });
