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
            controller: "RegisterEventsController",
            controllerAs: "vm",
            templateUrl: "App/Events/Partials/register-events-form-view.html"
        }).when('/contactus', {
            controller: "ContactUsController",
            controllerAs: "vm",
            templateUrl: "App/Shared/Partials/contactus-view.html"
        }).otherwise({
            redirectTo: '/home'
        });
    };

    GlobalVaribales.$inject = ['$rootScope'];
    function GlobalVaribales($rootScope) {

    };
})();