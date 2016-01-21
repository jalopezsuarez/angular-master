'use strict';

ngAppliationControllers.controller('StandingsController', StandingsController);
function StandingsController($scope, $templateCache, LocalStorage, StandingsService)
{
	$scope.peticion = function()
	{
		$scope.activityPeticion = true;
		StandingsService.realizarPeticion().success(function(response)
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
