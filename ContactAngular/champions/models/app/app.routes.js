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

ngApplication.run(function run($rootScope, $location, $cookieStore, $http)
{
	$rootScope.globals = $cookieStore.get('globals') || {};
	if ($rootScope.globals.currentUser)
	{
		$http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
	}
	$rootScope.$on('$locationChangeStart', function(event, next, current)
	{
		var restirctedModule = $location.path().match("^/in/") || $location.path().match("^in/");
		var restrictedPage = $.inArray($location.path(), []) === -1;
		var authenticated = $rootScope.globals.currentUser;
		if ((restirctedModule || restrictedPage) && !authenticated)
		{
			$location.path('ranking');
		}
	});
});
