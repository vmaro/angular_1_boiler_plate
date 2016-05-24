'use strict'

app.controller('UserCtrl', ['$scope', 'RestFulServ', function($scope, RestFulServ) {    
	$scope.user = {
		email: '',
		password: '',
		username: ''
	};
    $scope.register = function() {
        RestFulServ.register($scope.user);    	
    };
    $scope.login = function() {
    	RestFulServ.login($scope.user);
    };
}]);