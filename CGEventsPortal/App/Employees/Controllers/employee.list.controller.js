(function () {
    angular.module('app')
        .controller('EmployeeListController', EmployeeListController);

    EmployeeListController.$inject = ['$scope', 'EmployeeListService', '$routeParams', '$location', '$anchorScroll'];

    function EmployeeListController($scope, EmployeeListService, $routeParams, $location, $anchorScroll) {
        var vm = this;
        vm.initialize = initialize;
        vm.sortOrder = true;
        vm.getSelectedEmployee = getSelectedEmployee;
        vm.addNewEmployeeCtrl = addNewEmployeeCtrl;
        vm.changeOrder = changeOrder;
        vm.selectedEmployee = {};
        vm.newEmployee = {};

        function initialize() {
            vm.employeeList = EmployeeListService.getAllEmployees();
        }

        function getSelectedEmployee() {
            vm.selectedEmployee = EmployeeListService.getSingleEmployee($routeParams.empNumber);
        }

        function addNewEmployeeCtrl() {
            EmployeeListService.addNewEmployee(vm.newEmployee);
            $scope.employeeform.$setPristine();
            $location.path('/employeelist');
            $anchorScroll('top');
        }

        function changeOrder() {
            vm.sortOrder = !vm.sortOrder;
        }
    }
})();