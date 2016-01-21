'use strict';

ngApplicationDirectives.directive('ngAcceso', Acceso);
function Acceso()
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
}