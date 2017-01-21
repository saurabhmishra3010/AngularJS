(function () {
    angular.module('app')
        .controller('EventsListController', EventsListController);

    EventsListController.$inject = ['CacheDataService'];

    function EventsListController(CacheDataService) {
        var vm = this;
        vm.pageTitle = "Events List";
        vm.refreshView = refreshView;
        vm.showBookings = showBookings;
        vm.hideBookings = hideBookings;
        vm.sortFunction = sortFunction;
        vm.sortOrder = true;
        vm.eventDetails = [{
            eventNumber: 60576,
            eventCode: 'ANGTRAIN',
            eventName: 'AngularJS Training',
            startDate: new Date(),
            bookings: {width : 50 + '%'},
            price: 100,
            logo: 'App/Events/Images/angular.JPG',
            showHideBookingsFlag : false
        }, {
            eventNumber: 60589,
            eventCode: 'NODTRAIN',
            eventName: 'NodeJS Training',
            startDate: new Date(),
            bookings: {width : 57 + '%'},
            price: 200,
            logo: 'App/Events/Images/nodejs.JPG',
            showHideBookingsFlag : false
        }, {
            eventNumber: 72132,
            eventCode: 'BOOTRAIN',
            eventName: 'Bootstrap Training',
            startDate: new Date(),
            bookings: {width : 10 + '%'},
            price: 500,
            logo: 'App/Events/Images/bootstrap.JPG',
            showHideBookingsFlag : false
        }, {
            eventNumber: 87621,
            eventCode: 'REATRAIN',
            eventName: 'ReactJS Training',
            startDate: new Date(),
            bookings: {width : 30 + '%'},
            price: 300,
            logo: 'App/Events/Images/reactjs.JPG',
            showHideBookingsFlag : false
        }];

        function refreshView() {
            if(CacheDataService.dataInServiceFlag == true){
                vm.eventDetails.push(CacheDataService.data);
                CacheDataService.dataInServiceFlag = false;
            }          
        }

        function showBookings(event){
            var targetDom = event.target;
            var domScope = angular.element(targetDom).scope();
            domScope.td.showHideBookingsFlag = true;
        }

        function hideBookings(event){
            var targetDom = event.target;
            var domScope = angular.element(targetDom).scope();
            domScope.td.showHideBookingsFlag = false;
        }

        function sortFunction(){
            if(vm.sortOrder == true){
                vm.sortOrder = false;
            }
            else{
                vm.sortOrder = true;
            }
        }
    }
})();