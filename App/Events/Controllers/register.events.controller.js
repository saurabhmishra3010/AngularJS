(function () {
    angular.module('app')
        .controller('RegisterEventsController', RegisterEventsController);

    RegisterEventsController.$inject = ['CacheDataService'];

    function RegisterEventsController(CacheDataService) {
        var vm = this;
        vm.pageTitle = "Register Events Here";
        vm.registerEvent = registerEvent;

        function registerEvent() {
            var obj = {
                eventNumber: '',
                eventCode: '',
                eventName: '',
                startDate: '',
                bookings: {width : 23 + '%'},
                price: '',
                logo: 'App/Events/Images/default.JPG'
            };
            obj.eventNumber = vm.inputEventNumber;
            obj.eventCode = vm.inputEventCode;
            obj.eventName = vm.inputEventName;
            obj.startDate = vm.inputStartDate;
            obj.price = vm.inputPrice;
            CacheDataService.data = obj;
            CacheDataService.dataInServiceFlag = true;
            alert("Event Registered!!");
            document.getElementById('registerForm').reset();
        }
    }
})();