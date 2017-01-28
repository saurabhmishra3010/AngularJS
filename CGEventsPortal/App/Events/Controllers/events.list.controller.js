(function () {
    angular.module('app')
        .controller('EventsListController', EventsListController);

    EventsListController.$inject = ['CacheDataService', '$routeParams', '$location'];

    function EventsListController(CacheDataService, $routeParams, $location) {
        var vm = this;
        vm.newEvent = { logo: 'App/Events/Images/default.JPG', bookings: 0 };
        vm.eventDetails = {};
        vm.sortFunction = sortFunction;
        vm.sortOrder = true;
        vm.initialize = initialize;
        vm.gotoEventDetails = gotoEventDetails;
        vm.addNewEventController = addNewEventController;

        function initialize() {
            vm.eventDetails = CacheDataService.getAllEvents();
        }

        function gotoEventDetails() {
            vm.eventSelected = CacheDataService.getSingleEvent($routeParams.number);
        }

        function addNewEventController() {
            CacheDataService.addNewEvent(vm.newEvent);
            $location.path('/eventslist');
        }

        function sortFunction() {
            vm.sortOrder = !vm.sortOrder;
        }
    }
})();