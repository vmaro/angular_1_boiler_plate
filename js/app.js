'use strict'

var app = angular.module('app', [
		'restangular'
	]);

app.config(function(RestangularProvider) {
	
	RestangularProvider.setDefaultHeaders({
	    "Accept":"application/json"
	});

	RestangularProvider.setBaseUrl('/xmark/rest');
});