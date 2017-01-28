(function () {
    angular.module('app')
        .filter('indianCurrency', indianCurrency);

    function indianCurrency() {
        return function (x) {
            x = 'Rs. ' + x;
            return x;
        }
    }
})();