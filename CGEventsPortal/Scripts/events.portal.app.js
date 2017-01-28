(function () {
    angular.module('app', ['ngRoute'])
        .config(RouteManagerFunction)
        .run(GlobalVaribales);

    RouteManagerFunction.$inject = ['$routeProvider'];
    function RouteManagerFunction($routeProvider) {
        $routeProvider.when('/home', {
            controller: "HomeController",
            controllerAs: "vm",
            templateUrl: "App/Shared/Partials/home-view.html"
        }).when('/eventslist', {
            controller: "EventsListController",
            controllerAs: "vm",
            templateUrl: "App/Events/Partials/events-list-view.html"
        }).when('/registerevents', {
            controller: "EventsListController",
            controllerAs: "vm",
            templateUrl: "App/Events/Partials/register-events-form-view.html"
        }).when('/contactus', {
            controller: "ContactUsController",
            controllerAs: "vm",
            templateUrl: "App/Shared/Partials/contactus-view.html"
        }).when('/eventdetails/:number', {
            controller: "EventsListController",
            controllerAs: "vm",
            templateUrl: "App/Events/Partials/event-details-view.html"
        }).when('/employeelist', {
            controller: "EmployeeListController",
            controllerAs: "vm",
            templateUrl: "App/Employees/Partials/employee-list-view.html"
        }).when('/employeedetails/:empNumber', {
            controller: "EmployeeListController",
            controllerAs: "vm",
            templateUrl: "App/Employees/Partials/employee-details-view.html"
        }).otherwise({
            redirectTo: '/home'
        });
    };

    GlobalVaribales.$inject = ['$rootScope'];
    function GlobalVaribales($rootScope) {

    };
})();