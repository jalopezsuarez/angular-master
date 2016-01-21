'use strict';

ngApplicationDirectives.directive('ngAccess', Access);
function Access(AccessService, $location)
{
	return {
		restrict : 'A',
		require : '^ngModel',
		scope : {},
		templateUrl : 'partials/access/access.html',
		controller : [ '$scope', function($scope)
		{
			$scope.login = function()
			{
				$scope.activityAccess = true;
				AccessService.clearCredentials();
				AccessService.login($scope.username, $scope.password, function(response)
				{
					if (response.success)
					{
						AccessService.setCredentials($scope.username, $scope.password);
						$location.path('/');
					}
					else
					{
						alert(response.message);
					}
					$scope.activityAccess = false;
				});
			};
		} ]
	}
}