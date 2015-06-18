app.config(function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/about', {
       			templateUrl: 'Partials/about.html',
        		controller: '/Javascript/Controllers/aboutPageController.js',
        		controllerAs: 'about'
      		}).
      		otherwise({
        		redirectTo: 'Partials/about.html',
        		controller: '/Javascript/Controllers/aboutPageController.js',
        		controllerAs: 'about'
   			});
    //$locationProvider.html5Mode(true);
});