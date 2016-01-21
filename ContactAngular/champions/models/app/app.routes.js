'use strict';

ngApplication.config(function($locationProvider, $routeProvider)
{
	$locationProvider.html5Mode(true);

	$routeProvider.when('/in/standings', {
		templateUrl : 'pages/in/standings/standings.ng.html',
		controller : 'standingsController',
		css: 'public/in/css/styles.css'
	});
	
	$routeProvider.when('/on/ranking', {
		templateUrl : 'pages/on/rangking/ranking.ng.html',
		controller : 'rankingController',
		css: 'public/on/css/styles.css'
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});
});