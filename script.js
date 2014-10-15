

	// create the module and name it variable
		// also include ngRoute for all our routing needs
	var variable = angular.module('variable', ['ngRoute']);

		variable.config(function($routeProvider, $locationProvider) 
		{
			$routeProvider

				// route for the home page
				.when('/', {
					templateUrl : 'pages/home.html',
					controller : 'mainController'
				})
				// route for the home page
				.when('#home', {
					templateUrl : 'pages/home.html',
					controller : 'mainController'
				})

				// route for the work page
				.when('/work', {
					templateUrl : 'pages/work.html',
					controller : 'mainController'
				})

				// route for the blog page
				.when('/blog', {
					templateUrl : 'pages/blog.html',
					controller : 'mainController'
				})

				// route for the process page
				.when('/process', {
					templateUrl : 'pages/process.html',
					controller : 'mainController'
				})

				// route for the contact page
				.when('/contact', {
					templateUrl : 'pages/contact.html',
					controller : 'mainController'
				});

				// use the HTML5 History API
				$locationProvider.html5Mode(true);
		});

		variable.controller('mainController', function($scope) {

	});

	