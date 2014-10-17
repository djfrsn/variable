(function(variable) {

  var routeLoadingIndicator = function($rootScope) {
    return {
      restrict: 'E',
      template: "<div ng-show='isRouteLoading' class='center-block loading-indicator-body'>" +
        "<div class='loading'>Loading...</div>" +
        "</div>",
      replace: true,
      link: function(scope, elem, attrs) {

          target = elem.find('.loading-indicator-target');

        scope.isRouteLoading = false;

        $rootScope.$on('$routeChangeStart', function() {
          scope.isRouteLoading = true;
        });
        $rootScope.$on('$routeChangeSuccess', function() {
          scope.isRouteLoading = false;
        });
      }
    };
  };
  routeLoadingIndicator.$inject = ['$rootScope'];

  variable.directive('routeLoadingIndicator', routeLoadingIndicator);

}(angular.module('variable')));

