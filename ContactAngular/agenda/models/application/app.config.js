'use strict';

contactApplication.config([ '$locationProvider', '$routeProvider', contactRoute ]);

function contactRoute($locationProvider,$routeProvider) {
	$locationProvider.html5Mode(true);
	$routeProvider.when('/contact', {
		templateUrl : 'views/contact/ContactView.html',
		controller : 'contactController'
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
};