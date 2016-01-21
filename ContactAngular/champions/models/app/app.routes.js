'use strict';

ngApplication.config(function($locationProvider, $routeProvider)
{
	$locationProvider.html5Mode(true);

	$routeProvider.when('/ranking', {
		templateUrl : 'pages/on/ranking/ranking.ng.html',
		controller : 'RankingController',
		css : {
			href : 'public/on/css/styles.css',
			bustCache : true,
			persist : true,
			preload : true
		}
	});

	$routeProvider.when('/in/standings', {
		templateUrl : 'pages/in/standings/standings.ng.html',
		controller : 'StandingsController',
		css : {
			href : 'public/in/css/styles.css',
			bustCache : true,
			persist : true,
			preload : true
		}
	});

	$routeProvider.otherwise({
		redirectTo : '/'
	});
});
