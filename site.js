/*
	GLOBAL VARIABLES
*/



var heroBgColors = {
	home: '#2fb0dd',
	about: '#43bf64',
	blog: '#dd4b4b',
	portfolio: '#bcd646',
	contact: '#a846d1',
};




/*
	ANGULAR MODULE
*/

var app = angular.module('madeBySid', ['ngRoute']);




/*
	ROUTES
*/





app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.when('/blog', {
			templateUrl: 'templates/blog.html',
			controller: 'blogCtrl'
		})
		.when('/portfolio', {
			templateUrl: 'templates/portfolio.html',
			controller: 'portfolioCtrl'
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
		.otherwise('/');
});


/*
	CONTROLLERS
*/



app.controller('homeCtrl', ['$scope', function($scope){
	$scope.heroBgColor = heroBgColors.home;
}]);

app.controller('aboutCtrl', ['$scope', function($scope){
	$scope.heroBgColor = heroBgColors.about;
}]);

app.controller('blogCtrl', ['$scope', function($scope){
	$scope.heroBgColor = heroBgColors.blog;
}]);

app.controller('portfolioCtrl', ['$scope', function($scope){
	$scope.heroBgColor = heroBgColors.portfolio;
}]);

app.controller('contactCtrl', ['$scope', function($scope){
	$scope.heroBgColor = heroBgColors.contact;
}]);





/*
	DIRECTIVES
*/



/*app.directive('heroBg', function(){
	return {
		templateUrl: 'templates/heroBg.html'
	}
});*/