'use strict';

contactApplication.config([ '$locationProvider', '$routeProvider', championsRoute ]);

function championsRoute($locationProvider, $routeProvider)
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