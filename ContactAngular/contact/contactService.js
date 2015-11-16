'use strict'

angular.module('contactApplication.services', []).factory('contactService',
		contactService);

function contactService($http) {
	var contactService = {};

	contactService.realizarPeticion = function() {
		var resultado = $http({
			method : 'JSONP',
			url : 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		});
		return resultado;
	}

	return contactService;
}
