var app = angular.module('riskApp', ['ngRoute', 'ngResource']).run(function($rootScope) {
	$rootScope.authenticated = false;
	$rootScope.current_user = '';
	
	$rootScope.signout = function(){
      $rootScope.authenticated = false;
      $rootScope.current_user = '';
      $http.get('auth/signout');
	};
});

app.config(function($routeProvider){
	$routeProvider
		// Home page
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		// Log in strana
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		// Sign up strana
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		})
    .when('/map', {
      templateUrl: 'map.html',
      controller: 'mapController'
    });
});

app.controller('mainController', function($scope){
	// Home page controller
});

app.controller('mapController', function($scope){
  // Map controller
});

app.controller('authController', function($scope, $http, $rootScope, $location){
  $scope.user = { username: '', password: '' };
  $scope.error_message = '';

  // Funkcija koja reaguje na pritisak dugmeta Log in
  $scope.login = function(){
    $http.post('/auth/login', $scope.user).success(function(data){
      if(data.state == 'success')
      {
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/map');
      }
      else
        $scope.error_message = data.message;
    });
  };

  // Funkcija koja reaguje na pritisak dugmeta Register
  $scope.register = function(){
    $http.post('/auth/signup', $scope.user).success(function(data){
      if(data.state == 'success')
      {
        $rootScope.authenticated = true;
        $rootScope.current_user = data.user.username;
        $location.path('/map');
      }
      else
        $scope.error_message = data.message;
    });
  };
});