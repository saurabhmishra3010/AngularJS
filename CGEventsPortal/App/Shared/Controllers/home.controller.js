(function(){
    angular.module('app')
    .controller('HomeController' , HomeController);

    function HomeController(){
        var vm = this;
        vm.pageTitle = "Welcome to Capgemini Events Portal";
    }
})();