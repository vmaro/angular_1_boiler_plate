/**
 * Created by mario medrano on 13/09/14.
 */

'use strict'

app.factory('RestFulServ', ['Restangular',function(Restangular) {
    Restangular.setFullResponse(true);
    var RestFulServ = {
        register: function(user) {
            console.log('For Register: ' + user);
        },
        login: function(user) {
            console.log('For Log In: ' + user);
        }
    };
    return RestFulServ;
}]);