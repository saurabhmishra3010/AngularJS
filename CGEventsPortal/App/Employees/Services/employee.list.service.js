(function () {
    angular.module('app')
        .service('EmployeeListService', EmployeeListService);

    function EmployeeListService() {
        var employees = [{
            employeeId : 60576,
            employeeName : "Saurabh Mishra",
            address : "A2B 104 Pimple Saudagar",
            pin : "400927",
            phoneNumber : "7757053755", 
        },{
            employeeId : 60578,
            employeeName : "Michael Chaudhary",
            address : "Agartala",
            pin : "411027",
            phoneNumber : "7757059995", 
        },{
            employeeId : 70586,
            employeeName : "Michael Mishra",
            address : "Kurla , Mumbai",
            pin : "200327",
            phoneNumber : "9454525202", 
        },{
            employeeId : 89674,
            employeeName : "Shahrukh Khan",
            address : "Matunga Mumbai",
            pin : "499027",
            phoneNumber : "8454751024", 
        }];

        this.getAllEmployees = function(){
            return employees;
        }

        this.getSingleEmployee = function(empNo){
            var employeeSelected;
            employees.forEach(function (employee) {
                if (employee.employeeId == empNo) {
                    employeeSelected = employee;
                }
            });
            return employeeSelected;
        }

        this.addNewEmployee = function(emp){
            employees.push(emp);
        }
    }
})();