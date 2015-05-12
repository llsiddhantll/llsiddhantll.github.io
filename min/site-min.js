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
	SERVICES
*/


app.service('colors',function(){
	this.heroColors = {
		home: '#2fb0dd',
		about: '#43bf64',
		blog: '#dd4b4b',
		portfolio: '#bcd646',
		contact: '#a846d1',
	};
});





/*
	CONTROLLERS
*/



app.controller('homeCtrl', ['$scope', 'colors', function($scope, colors){
	$scope.heroBgColor = colors.heroColors.home;
}]);

app.controller('aboutCtrl', ['$scope', '$location', 'colors', function($scope, $location, colors){
	$scope.heroBgColor = colors.heroColors.about;
	console.log($location.$$path);
}]);

app.controller('blogCtrl', ['$scope', 'colors', function($scope, colors){
	$scope.heroBgColor = colors.heroColors.blog;
}]);

app.controller('portfolioCtrl', ['$scope', 'colors', function($scope, colors){
	$scope.heroBgColor = colors.heroColors.portfolio;
}]);

app.controller('contactCtrl', ['$scope', 'colors', function($scope, colors){
	$scope.heroBgColor = colors.heroColors.contact;
}]);





/*
	DIRECTIVES
*/



/*app.directive('heroBg', function(){
	return {
		templateUrl: 'templates/heroBg.html'
	}
});*/

