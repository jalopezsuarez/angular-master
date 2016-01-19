'use strict';

angular.module('contactApplication.controllers', []).controller('contactController', contactController);
function contactController($scope, $templateRequest, $sce, $compile, contactService) {

	$scope.peticion = function() {
		//alert("peticion");

		contactService.realizarPeticion().success(function(response) {
			$scope.season = response.MRData.StandingsTable.season;
			//$scope.standings = response.MRData.StandingsTable.StandingsLists[0].DriverStandings;
			
			var templateUrl = $sce.getTrustedResourceUrl('views/contact/ContactTemplate.html');
			$templateRequest(templateUrl).then(function(template) {
				//alert(template);
				//$compile($("#my-element").html(template).contents())($scope);
			}, function() {
			});
			
			//alert(response.MRData.StandingsTable.StandingsLists[0].season);
		});

	};
}
