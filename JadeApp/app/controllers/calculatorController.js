(function () {
    'use strict';

    angular.module('jadeApp')
        .controller('CalculatorController', 

            function ($scope, CalculatorService) {
                $scope.CalcCover = function () {
                    var rent = CalculatorService.data.calc.rent;
                    var kids = CalculatorService.data.calc.kids;
                    var debt = CalculatorService.data.calc.debt;

                    $scope.cover = (rent * 12 * 20) + (kids * 50000) + debt;
                    if ($scope.cover < 50000) {
                        $scope.cover = 50000;
                    }
                    if ($scope.cover > 1000000) {
                        $scope.cover = 1000000;
                    }
                }
            }
    );
})();