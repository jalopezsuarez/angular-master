'use strict';

ngApplicationFactory.factory('MeteoService', MeteoService);
function MeteoService($http)
{
	var meteoService = {};

	meteoService.realizarPeticion = function()
	{
		var resultado = $http({
			method : 'JSONP',
			url : 'http://ergast.com/api/f1/2013/driverStandings.json?callback=JSON_CALLBACK'
		});
		return resultado;
	}

	return meteoService;
}
