'use strict';

ngApplicationDirectives.directive('ngRate', function()
{
	return {
		restrict : 'A',
		scope : {
			callback : '&'
		},
		replace : true,
		link : function(scope, element, attrs)
		{
			$(element).rateYo({

				onChange : function(rating, rateYoInstance)
				{

					scope.$apply(function()
					{
						scope.callback({
							stars : rating
						});
					});
				}
			});
		}
	}
});