'use strict';

ngApplication.config(function($locationProvider, $routeProvider)
{
	$locationProvider.html5Mode(true);

	$routeProvider.when('/', {
		templateUrl : 'pages/app/app.ng.html',
		controller : 'ApplicationController'
	});

	$routeProvider.when('/in/meteo', {
		templateUrl : 'pages/in/meteo/meteo.ng.html',
		controller : 'MeteoController'
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
			$location.path('/');
		}
	});
	$rootScope.$on('$routeChangeSuccess', function(event, data)
	{
		var locationStyles = '';
		var restrictions = $location.path().search('/in/') > 0 || $location.path().match('^/in/') || $location.path().match('^in/');
		if (restrictions)
		{
			routeStyles = 'in';
		}
		$rootScope.module = locationStyles;
	});
});
