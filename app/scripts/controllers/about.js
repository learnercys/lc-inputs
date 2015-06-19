'use strict';

/**
 * @ngdoc function
 * @name inputsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the inputsApp
 */
angular.module('inputsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
