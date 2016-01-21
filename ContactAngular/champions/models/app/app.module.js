'use strict';

var ngApplication = angular.module('ngApplication', [ 'ngApplication.factory', 'ngApplication.controllers', 'ngApplication.directives', 'ngRoute', 'door3.css', 'ngActivityIndicator' ]);

var ngApplicationFactory = angular.module('ngApplication.factory', []);
var ngAppliationControllers = angular.module('ngApplication.controllers', []);
var ngApplicationDirectives = angular.module('ngApplication.directives', []);

ngApplication.config([ '$logProvider', function($logProvider)
{
	$logProvider.debugEnabled(true);
} ]);