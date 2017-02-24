angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/booking', {
			templateUrl: 'views/booking.html',
			controller: 'BookingController'
		})
		.when('/movies', {
			templateUrl: 'views/movies.html',
			controller: 'MoviesController'
		})
		.when('/city', {
			templateUrl: 'views/city.html',
			controller: 'cityController'
		})
		.when('/showtime', {
			templateUrl: 'views/showtime.html',
			controller: 'showtimeController'
		})
		 .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterController',
            access: { restricted: false }
        })
		.when('/login', {
      templateUrl: 'views/login.html',
      controller: 'LoginController',
      access: {restricted: false}
        })

    .when('/logout', {
      controller: 'LogoutController',
      access: {restricted: true}
    })
		.when('/assign', {
			templateUrl: 'views/assign.html',
			controller: 'AssignController'
		})


        .when('/theatre', {
			templateUrl: 'views/theatre.html',
			controller: 'theatreController'
		})

		.when('/admin', {
	templateUrl: 'views/admin.html',
	controller: 'adminController'
})

.when('/book', {
templateUrl: 'views/booking.html',
controller: 'BookController'
})
.otherwise({
            redirectTo: '/',
        });



	$locationProvider.html5Mode(true);

}]);
