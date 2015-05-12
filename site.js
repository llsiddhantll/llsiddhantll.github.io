/*
	ANGULAR MODULE
*/

var app = angular.module('madeBySid', ['ui.router']);



/*
	ROUTES
*/





app.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
	$urlRouterProvider
		.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.state('blog', {
			url: '/blog',
			templateUrl: 'templates/blog.html',
			controller: 'blogCtrl'
		})
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: 'templates/portfolio.html',
			controller: 'portfolioCtrl'
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		});
}]);



/*
	SERVICES
*/


app.service('colors',['$location', function($location){
	this.heroColors = {
		home: '#2fb0dd',
		about: '#43bf64',
		blog: '#dd4b4b',
		portfolio: '#bcd646',
		contact: '#a846d1',
	};
}]);





/*
	CONTROLLERS
*/



app.controller('headerCtrl', ['$scope', '$location', 'colors', function($scope, $location, colors){
	$scope.headerStyle = {'background-color': colors.heroColors.home};
	$scope.$on('$locationChangeSuccess', function(evt, newValue, oldValue){
		$scope.headerStyle = {'background-color': colors.heroColors[$location.path().slice(1)]};
		if($location.$$path === '/')
		{
			$scope.headerStyle = {'background-color': colors.heroColors.home};
		}
	});
}]);

app.controller('homeCtrl', ['$scope', 'colors', function($scope, colors){
	$scope.heroBgColor = colors.heroColors.home;
}]);

app.controller('aboutCtrl', ['$scope', 'colors', function($scope, colors){
	$scope.heroBgColor = colors.heroColors.about;
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



app.directive('header', function(){
	return {
		templateUrl: 'templates/header.html'
	}
});

app.directive('footer', function(){
	return {
		templateUrl: 'templates/footer.html'
	}
});