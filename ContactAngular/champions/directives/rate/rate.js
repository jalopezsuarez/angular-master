'use strict';

ngApplicationDirectives.directive('ngRate', function()
{
	return {
		restrict : 'A',
		scope : {},
		replace : true,
		link : function(scope, element, attrs)
		{
			$(element).rateYo({
				starWidth : "40px"
			});
		}
	}
});