'use strict';

ngApplicationFactory.factory('StandingsService', StandingsService);
function StandingsService($http)
{
	var standingsService = {};

	standingsService.realizarPeticion = function()
	{
		var resultado = $http({
			method : 'JSONP',
			url : 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		});
		return resultado;
	}

	return standingsService;
}
