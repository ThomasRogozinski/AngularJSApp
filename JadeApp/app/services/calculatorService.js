(function () {
    'use strict';

    angular.module('jadeApp')
        .factory('CalculatorService', function () {
            return {
                //set initial values
                data: {
                    init: {
                        rentMin: 0,
                        rentMax: 5000,
                        rentStep: 100,
                        kidsMin: 0,
                        kidsMax: 5,
                        kidsStep: 1,
                        debtMin: 0,
                        debtMax: 500000,
                        debtStep: 1000,
                    },
                    calc: {
                        rent: 2000,
                        kids: 1,
                        debt: 20000
                    }
                }
            };
    });
})();