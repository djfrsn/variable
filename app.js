

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
				controller : 'homeController'
			})
			// route for the home page
			.when('#home', {
				templateUrl : 'pages/home.html',
				controller : 'homeController'
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
	
// Home controller
variable.controller('homeController', function($scope) {
	$scope.header = { name: 'header.html', url: 'lib/partials/header.html' };
	$scope.footer = { name: 'footer.html', url: 'lib/partials/footer.html' };
	$(".rslides").responsiveSlides(); 
	 $scope.ddMenuOptions = [
        {
            text: 'Option1',
            iconCls: 'someicon'
        },
        {
            text: 'Option2',
            someprop: 'somevalue'
        },
        {
            // Any option with divider set to true will be a divider
            // in the menu and cannot be selected.
            divider: true
        },
        {
            // Example of an option with the 'href' property
            text: 'Option4',
            href: '#option4'
        }
    ];

    $scope.ddMenuSelected = {};
});
// Main controller
variable.controller('mainController', function($scope) {
	$scope.header = { name: 'header.html', url: 'lib/partials/header.html' };
	$scope.footer = { name: 'footer.html', url: 'lib/partials/footer.html' };
	 $scope.ddMenuOptions = [
        {
            text: 'Option1',
            iconCls: 'someicon'
        },
        {
            text: 'Option2',
            someprop: 'somevalue'
        },
        {
            // Any option with divider set to true will be a divider
            // in the menu and cannot be selected.
            divider: true
        },
        {
            // Example of an option with the 'href' property
            text: 'Option4',
            href: '#option4'
        }
    ];

    $scope.ddMenuSelected = {};
});

	