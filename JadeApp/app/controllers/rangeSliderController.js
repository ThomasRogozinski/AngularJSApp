(function () {
    'use strict';

    angular.module('jadeApp')
        .controller('RangeSliderController',

            function ($scope, CalculatorService) {
                $scope.calcData = CalculatorService.data.calc;
                $scope.initData = CalculatorService.data.init;
            }
    );
})();