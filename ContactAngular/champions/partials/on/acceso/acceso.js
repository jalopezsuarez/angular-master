'use strict';

ngApplicationDirectives.directive('ngAcceso', function()
{
	return {
		restrict : 'A',
		scope : {
			callback : '&'
		},
		replace : true,
		link : function(scope, element, attrs)
		{
		
		}
	}
});