'use strict'

app.factory('RestFulServ', ['Restangular',function(Restangular) {
    Restangular.setFullResponse(true);
    var RestFulServ = {
        register: function(user) {
        },
        login: function(user) {
        }
    };
    return RestFulServ;
}]);