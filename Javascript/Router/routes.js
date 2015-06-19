app.config(function($routeProvider, $locationProvider) {
		$routeProvider.
			when('/about', {
       	templateUrl: 'Partials/about.html',
        controller: 'aboutPageController'
      }).
      when('/music', {
        templateUrl: 'Partials/music.html',
        controller: 'musicPageController'
      }).
      otherwise({
        redirectTo: '/',
        templateUrl: 'Partials/about.html',
        controller: 'aboutPageController'
   		});
});