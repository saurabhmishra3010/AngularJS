(function () {
    angular.module('app')
        .service('CacheDataService', CacheDataService);

    function CacheDataService() {
        return {
            data: {}
        }
    }
}
)();