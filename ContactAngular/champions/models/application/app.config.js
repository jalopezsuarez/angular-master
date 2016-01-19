'use strict';

contactApplication.config([ '$locationProvider', '$routeProvider', standingsRoute ]);

function standingsRoute($locationProvider, $routeProvider)
{
	$locationProvider.html5Mode(true);

	$routeProvider.when('/standings', {
		templateUrl : 'views/standings/standings.ng.html',
		controller : 'standingsController'
	});
	$routeProvider.otherwise({
		redirectTo : '/'
	});
};