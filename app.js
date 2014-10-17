

	// create the module and name it variable
		// also include ngRoute for all our routing needs
	var variable = angular.module('variable', ['ngRoute', 'ngAnimate']);

	function HeaderCtrl($scope) {
		$scope.header = { name: 'header.html', url: 'lib/partials/header.html' };
	}

	function FooterCtrl($scope) {
		$scope.header = { name: 'footer.html', url: 'lib/partials/footer.html' };
	}
		// Route main navigation links
		variable.config(function($routeProvider) 
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

		});
		
		// Main controller
		variable.controller('mainController', function($scope) {

		});

	