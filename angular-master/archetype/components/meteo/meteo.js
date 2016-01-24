'use strict';

ngApplicationDirectives.directive('ngMeteo', Meteo);
function Meteo(MeteoService)
{
	return {
		restrict : 'A',
		require : '^ngModel',
		scope : {
			ngCity : '@'
		},
		templateUrl : 'components/meteo/meteo.html',
		controller : function($scope, LocalStorage)
		{
			$scope.meteo = [];

			$scope.search = function()
			{
				$scope.meteo.push({
					'name' : 'song1',
					'url' : 'http: //test/song1.mp3'
				});
			}

			$scope.activityComponente = true;
			MeteoService.realizarPeticion().success(function(response)
			{
				$scope.prueba = response.MRData.StandingsTable.season;
				$scope.activityComponente = false;
			});

			$scope.peticion = function()
			{
				$scope.activityPeticion = true;
				MeteoService.realizarPeticion().success(function(response)
				{
					$scope.season = response.MRData.StandingsTable.season;
					$scope.standings = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;

					$scope.activityPeticion = false;
				});
			};

			$scope.callback = function(item, stars)
			{
				$scope.stars = stars;
			};

			LocalStorage.bind($scope, 'test', 'persistent text');
			$scope.clearTest = function()
			{
				LocalStorage.remove('test');
			};

		}
	}
}
