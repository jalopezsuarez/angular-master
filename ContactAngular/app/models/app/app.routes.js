'use strict';

ngApplication.config(function($locationProvider, $routeProvider)
{
	$locationProvider.html5Mode(true);

	$routeProvider.when('/access', {
		templateUrl : 'pages/access/access.ng.html',
		controller : 'AccessController'
	});

	$routeProvider.when('/in/standings', {
		templateUrl : 'pages/in/standings/standings.ng.html',
		controller : 'StandingsController'
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
		var restrictions = $location.path().search('/in/') > 0 || $location.path().match('^/in/') || $location.path().match('^in/');
		var authenticated = $rootScope.globals.currentUser;
		if (restrictions && !authenticated)
		{
			$location.path('/access');
		}
	});
	$rootScope.$on('$routeChangeSuccess', function(ev, data)
	{
		if (data.$route && data.$route.controller)
			$rootScope.controller = data.$route.controller;
	});
});
