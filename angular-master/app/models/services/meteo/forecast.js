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

// http://api.openweathermap.org/data/2.5/forecast?q=Almeria&appid=2de143494c0b295cca9337e1e96b00e0
