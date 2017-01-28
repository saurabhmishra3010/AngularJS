(function(){
    angular.module('app')
    .controller('ContactUsController' , ContactUsController);

    function ContactUsController(){
        var vm = this;
        vm.pageTitle = "Contact Us";
    }
})();