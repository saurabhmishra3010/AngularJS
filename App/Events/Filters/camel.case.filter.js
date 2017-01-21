(function () {
    angular.module('app')
        .filter('camelCase', camelCase);

    function camelCase() {
        return function (x) {
            var i , c , temp = '';
            for(i = 0 ; i < x.length ; i++){
                if(i == 0){
                    c = x[i].toUpperCase();
                }
                else{
                    c = x[i].toLowerCase();
                }
                temp += c;
            }
            return temp;
        }
    }
})();