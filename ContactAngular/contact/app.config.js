'use strict';

contactApplication.config([ '$routeProvider', contactRoute ]);

function contactRoute($routeProvider) {
	$routeProvider.when("/contact", {
		templateUrl : "contactView.html",
		controller : "contactController"
	}).otherwise({
		redirectTo : '/home'
	});
};