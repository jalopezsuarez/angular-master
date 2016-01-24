'use strict';

ngAppliationControllers.controller('MeteoController', MeteoController);
function MeteoController($scope, $templateCache, LocalStorage, MeteoService)
{
	$scope.title = "Meteo Sample"
}
