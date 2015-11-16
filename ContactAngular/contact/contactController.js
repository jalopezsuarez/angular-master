'use strict';

angular.module('contactApplication.controllers', []).controller('contactController',
		contactController);
function contactController($scope, contactService) {

	$scope.peticion = function() {
		alert("peticion");

		contactService.realizarPeticion().success(function(response) {
			alert(response.toSource());
		});

	};
}
