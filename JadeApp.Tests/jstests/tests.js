/// <reference path="../assets/js/angular.js" /> 
/// <reference path="../assets/js/angular-mocks.js" /> 
/// <reference path="../../JadeApp/app/app.js" />
/// <reference path="../../JadeApp/app/services/calculatorService.js" />
/// <reference path="../../JadeApp/app/controllers/calculatorController.js" />
/// <reference path="../../JadeApp/app/controllers/rangeSliderController.js" />
/// <reference path="../../JadeApp/app/directives/rangeSlider.js" />


describe('calculator', function () {
    beforeEach(module('jadeApp'));

    var scope, ctrl, service;

    describe('ctrl', function () {

        beforeEach(inject(function ($rootScope, $controller, CalculatorService) {
            scope = $rootScope.$new();
            service = CalculatorService;

            ctrl = $controller('CalculatorController', {
                $scope: scope,
                CalculatorService: service
            });
        }));

        it('checks default insurance cover', function () {
            var controller = ctrl;
            scope.CalcCover();
            expect(scope.cover).toEqual(550000);
        });

        it('checks min insurance cover', function () {
            var controller = ctrl;
            service.data.calc.rent = 0;
            service.data.calc.kids = 0;
            service.data.calc.debt = 0;
            scope.CalcCover();
            expect(scope.cover).toEqual(50000);
        });

        it('checks max insurance cover', function () {
            var controller = ctrl;
            service.data.calc.rent = service.data.init.rentMax;
            service.data.calc.kids = service.data.init.kidsMax;
            service.data.calc.debt = service.data.init.debtMax;
            scope.CalcCover();
            expect(scope.cover).toEqual(1000000);
        });
    });
});