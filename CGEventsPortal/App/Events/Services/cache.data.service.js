(function () {
    angular.module('app')
        .service('CacheDataService', CacheDataService);

    function CacheDataService() {
        var events = [{
            eventNumber: 60576,
            eventCode: 'ANGTRAIN',
            eventName: 'AngularJS Training',
            startDate: new Date(),
            bookings: 50,
            price: 100,
            logo: 'App/Events/Images/angular.JPG'
        }, {
            eventNumber: 60589,
            eventCode: 'NODTRAIN',
            eventName: 'NodeJS Training',
            startDate: new Date(),
            bookings: 57,
            price: 200,
            logo: 'App/Events/Images/nodejs.JPG'
        }, {
            eventNumber: 72132,
            eventCode: 'BOOTRAIN',
            eventName: 'Bootstrap Training',
            startDate: new Date(),
            bookings: 10,
            price: 500,
            logo: 'App/Events/Images/bootstrap.JPG'
        }, {
            eventNumber: 87621,
            eventCode: 'REATRAIN',
            eventName: 'ReactJS Training',
            startDate: new Date(),
            bookings: 30,
            price: 300,
            logo: 'App/Events/Images/reactjs.JPG'
        }];

        this.getAllEvents = function () {
            return events;
        }

        this.getSingleEvent = function (eventNo) {
            var eventSelected;
            events.forEach(function (evt) {
                if (evt.eventNumber == eventNo) {
                    eventSelected = evt;
                }
            });
            return eventSelected;
        }

        this.addNewEvent = function(event){
            events.push(event);
        }
    }
}
)();