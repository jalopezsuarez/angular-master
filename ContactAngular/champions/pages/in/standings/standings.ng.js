'use strict';

ngAppliationControllers.controller('standingsController', StandingsController);
function StandingsController($scope, $templateCache, localStorage, standingsService)
{
	$scope.peticion = function()
	{
		$scope.activityPeticion = true;
		standingsService.realizarPeticion().success(function(response)
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

	localStorage.bind($scope, 'test', 'Some Default Text');
	$scope.clearTest = function()
	{
		localStorage.remove('test');
	};
}
