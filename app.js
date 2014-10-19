

// create the module and name it variable
	// also include ngRoute for all our routing needs
var variable = angular.module('variable', ['ngRoute', 'ngAnimate', 'ngDropdowns']);

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

			// route for the services page
			.when('/services', {
				templateUrl : 'pages/services.html',
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
	$scope.header = { name: 'header.html', url: 'lib/partials/header.html' };
	$scope.footer = { name: 'footer.html', url: 'lib/partials/footer.html' };
	$(".rslides").responsiveSlides(); 
	$scope.ddMenuOptions = [
        {
            // Example of an option with the 'href' property
            text: 'Home',
            href: '#'
        },
        {
            // Example of an option with the 'href' property
            text: 'Work',
            href: '#work'
        },
        {
            // Example of an option with the 'href' property
            text: 'Services',
            href: '#services'
        },
        {
            // Example of an option with the 'href' property
            text: 'Blog',
            href: '#blog'
        },
        {
            // Example of an option with the 'href' property
            text: 'Contact',
            href: '#contact'
        }
    ];

    $scope.ddMenuSelected = {};
});

	