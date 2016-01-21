'use strict';

ngApplicationDirectives.directive('ngAcceso', Acceso);
function Acceso(AuthenticationService, UserService, $location)
{
	return {
		restrict : 'A',
		require : '^ngModel',
		scope : {},
		templateUrl : 'partials/on/acceso/acceso.html',
		controller : [ '$scope', function($scope)
		{
			$scope.login = function()
			{
				AuthenticationService.ClearCredentials();
				AuthenticationService.Login($scope.username, $scope.password, function(response)
				{
					if (response.success)
					{
						AuthenticationService.SetCredentials($scope.username, $scope.password);
						$location.path('in/standings');
					}
					else
					{
						alert(response.message);
					}
				});
			};

			$scope.register = function()
			{
				var user = {
					username : "test",
					password : "test"
				};
				UserService.Create(user).then(function(response)
				{
					if (response.success)
					{
						FlashService.Success('Registration successful', true);
						$location.path('/login');
					}
					else
					{
						alert(response.message);
					}
				});
			}
		} ]
	}
}