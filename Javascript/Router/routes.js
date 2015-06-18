app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/about', {
       			templateUrl: '/Partials/about.html',
        		controller: '/Javascript/Controllers/aboutPageController.js',
        		controllerAs: 'about'
      		}).
      		otherwise({
        		redirectTo: '/Partials/about.html',
        		controller: '/Javascript/Controllers/aboutPageController.js',
        		controllerAs: 'about'
   			});
	}
]);