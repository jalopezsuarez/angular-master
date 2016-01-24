'use strict';

ngApplicationDirectives.directive('ngAccess', Access);
function Access(AccessService, $location)
{
	return {
		restrict : 'A',
		require : '^ngModel',
		scope : {
			ngSuccess : '@'
		},
		templateUrl : 'components/access/access.html',
		controller : function($scope)
		{
			$scope.credentials = AccessService.hasCredentials();

			$scope.login = function()
			{
				$scope.activityAccess = true;
				$scope.username = this.username;
				$scope.password = this.password;
				AccessService.clearCredentials();
				AccessService.login($scope.username, $scope.password, function(response)
				{
					if (response.success)
					{
						AccessService.setCredentials($scope.username, $scope.password);
						if ($scope.ngSuccess != undefined && $scope.ngSuccess.length > 0)
						{
							$location.path($scope.ngSuccess);
						}
						else
						{
							$location.path('//');
						}
					}
					else
					{
						alert(response.message);
					}
				});
			};

			$scope.logout = function()
			{
				AccessService.clearCredentials();
				$location.path('//');
			}
		}
	}
}