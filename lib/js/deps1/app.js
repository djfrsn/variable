// Variable Application JS 

// create the module and name it variable
	// also include ngRoute for all our routing needs
var variable = angular.module('variable', ['ngRoute', 'ngAnimate', 'mm.foundation', 'ngMap', 'angulartics', 'angulartics.google.analytics']);

	// Route main navigation links
	variable.config(function($routeProvider) 
	{
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'pages/home.html',
				controller : 'mainController'
			})
			// explicit route for the home page
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
variable.controller('mainController', function($scope, $rootScope, $location) {
	
	$rootScope.location = $location;

	// Run mobile device detection
	(function(a){(jQuery.browser=jQuery.browser||{}).mobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))})(navigator.userAgent||navigator.vendor||window.opera);
	

	// assign device depending on browser UA
	var device = 'desktop';
        if(jQuery.browser.mobile === true){
        	// name device mobile
            device = 'mobile';

            // Assign dropdown menu links
			$scope.navLinks = [
			{
				text: 'Home',
				url: '#'
			},
			{
				text: 'Work',
				url: '#work'
			},
			{
				text: 'Services',
				url: '#services'
			},
			{
				text: 'Blog',
				url: '#blog'
			},
			{
				text: 'Contact',
				url: '#contact'
			}
			];
      
      // Set PageSpeed link to mobile
      $('.pagespeed').attr('href', 'https://developers.google.com/speed/pagespeed/insights/?url=http%3A%2F%2Fdennisjefferson.com%2Fvar&tab=mobile');
 
        } 

    // Pair the header to the detected device dir    
	$scope.header = { name: 'header.html', url: 'lib/partials/' + device + '/header.html' };
	$scope.footer = { name: 'footer.html', url: 'lib/partials/footer.html' };

	// Init intro image slider
	$(".rslides").responsiveSlides({
  		auto: true,             // Boolean: Animate automatically, true or false
	  	speed: 750,            // Integer: Speed of the transition, in milliseconds
	  	timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	});
	
});

var ModalDemoCtrl = function ($scope, $modal, $log, $timeout, $element) {

  $scope.imgs = [
  	{
  		src: 'lib/imgs/1.jpg',
  		text: 'image 1'
  	},
  	{
  		src: 'lib/imgs/2.jpg',
  		text: 'image 2'
  	},
  	{
  		src: 'lib/imgs/3.jpg',
  		text: 'image 3'
  	},
  	{
  		src: 'lib/imgs/4.jpg',
  		text: 'image 4'
  	},
  	{
  		src: 'lib/imgs/5.jpg',
  		text: 'image 5'
  	},
    {
      src: 'lib/imgs/6.jpg',
      text: 'image 6'
    },
    {
      src: 'lib/imgs/7.jpg',
      text: 'image 7'
    },
    {
      src: 'lib/imgs/8.jpg',
      text: 'image 8'
    },
    {
      src: 'lib/imgs/9.jpg',
      text: 'image 9'
    }
 ];
  
  // Initialize slider when thumbnail is clicked
  $scope.slider = function(){
    $timeout(function() {
      $(".work_slides").responsiveSlides({
        auto: false,
        pager: false,
        random: true,
        nav: true,
        speed: 500,
      });
    }, 1);
  };

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'img.html',
      controller: ModalInstanceCtrl,
      resolve: {
        imgs: function () {
          return $scope.imgs;
        }
      }
    });

    modalInstance.result.then(function (selectedImg) {
      $scope.selected = selectedImg;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, imgs) {

  $scope.imgs = imgs; 
  $scope.selected = {
    img: $scope.imgs[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.img);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};

 variable.controller('FormController',function($scope, $http) {
  // creating a blank object to hold our form information.
  //$scope will allow this to pass between controller and view
  $scope.formData = {};
  // submission message doesn't show when page loads
  $scope.submission = false;
  $scope.submitForm = function() {
    $http({
    method : 'POST',
    url : 'process.php',
    data : $.param($scope.formData), // pass in data as strings
    headers : { 'Content-Type': 'application/x-www-form-urlencoded' } // set the headers so angular passing info as form data (not request payload)
  })
    .success(function(data) {
      if (!data.success) {
       // if not successful, bind errors to error variables
       $scope.errorName = data.errors.name;
       $scope.errorEmail = data.errors.email;
       $scope.errorTextarea = data.errors.message;
       $scope.submissionMessage = data.messageError;
       $scope.submission = true; //shows the error message
      } else {
      // if successful, bind success message to message
       $scope.submissionMessage = data.messageSuccess;
       $scope.formData = {}; // form fields are emptied with this line
       $scope.submission = true; //shows the sucess message
      }
     });
   };
});