'use strict';

var ngApplication = angular.module('championsApplication.directives', []);
ngApplication.directive('ngComponente', function(standingsService) {
	return {
		restrict : 'A',
		require : '^ngModel',
		scope : {
			ngCity : '@',
			ngLatitude : '@'
		},
		templateUrl : 'directives/componente/componente.html',
		controller : [ '$scope', function($scope) {
			$scope.activityComponente = true;
			standingsService.realizarPeticion().success(function(response) {
				$scope.prueba = response.MRData.StandingsTable.season;
				$scope.activityComponente = false;
				$("#jRate").jRate();
			});
		} ]
	}
});
