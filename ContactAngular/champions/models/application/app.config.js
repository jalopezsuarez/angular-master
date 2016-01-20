'use strict';

ngApplication.config(function($locationProvider, $routeProvider) {
	$locationProvider.html5Mode(true);

	$routeProvider.when('/standings', {
		templateUrl : 'views/standings/standings.ng.html',
		controller : 'standingsController'
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});
});