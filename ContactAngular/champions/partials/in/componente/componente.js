'use strict';

ngApplicationDirectives.directive('ngComponente', Componente);
function Componente(StandingsService)
{
	return {
		restrict : 'A',
		require : '^ngModel',
		scope : {
			ngCity : '@',
			ngLatitude : '@'
		},
		templateUrl : 'partials/in/componente/componente.html',
		controller : [ '$scope', function($scope)
		{
			$scope.activityComponente = true;
			StandingsService.realizarPeticion().success(function(response)
			{
				$scope.prueba = response.MRData.StandingsTable.season;
				$scope.activityComponente = false;
			});
		} ]
	}
}
