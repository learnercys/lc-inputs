'use strict';

/**
 * @ngdoc function
 * @name inputsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the inputsApp
 */
angular.module('inputsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.options = {
      breakPoint: ','
    };
  });
