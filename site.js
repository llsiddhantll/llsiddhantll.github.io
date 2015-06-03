/*

	APP MODULE

*/

var app = angular.module('app', ['ngRoute', 'ngAnimate']);


/*

	ROUTES

*/


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/home.html',
			controller: 'homeCtrl'
		})
		.when('/about', {
			templateUrl: 'templates/about.html',
			controller: 'aboutCtrl'
		})
		.when('/portfolio', {
			templateUrl: 'templates/portfolio.html',
			controller: 'portfolioCtrl'
		})
		.when('/blog', {
			templateUrl: 'templates/blog.html',
			controller: 'blogCtrl'
		})
		.when('/contact', {
			templateUrl: 'templates/contact.html',
			controller: 'contactCtrl'
		})
		.when('/resume',{
			controller: 'resumeCtrl',
			template: '<div><div>'
		})
		.otherwise({
			redirectTo: '/'
		});

		//$locationProvider.html5Mode(true);
}]);





/*

	SERVICES

*/
app.service('activeTab', [function(){
	var self = this;
	this.active = {
		'home': true,
		'about': false,
		'blog': false,
		'portfolio': false,
		'contact': false,
		'resume': false,
	};
}])







/*

	CONTROLLERS

*/

app.controller('mainCtrl', ['$scope', '$location', 'activeTab', function($scope, $location, activeTab) {
	$scope.activeOrNot = activeTab.active;

	$scope.$on('$locationChangeStart', function(){
		for(x in activeTab.active)
			activeTab.active[x] = false;
		activeTab.active[$location.url().slice(1)] = true;
		$scope.activeOrNot = activeTab.active;

		$scope.loader = true;
	});

	$scope.$on('$locationChangeSuccess', function(){
		$scope.loader = false;
	});
}])

app.controller('homeCtrl', ['$scope', function($scope){
	
}]);

app.controller('aboutCtrl', ['$scope', function($scope){
	
}]);

app.controller('portfolioCtrl', ['$scope', function($scope){
	
}]);

app.controller('blogCtrl', ['$scope', function($scope){
	
}]);

app.controller('contactCtrl', ['$scope', function($scope){
	
}]);

app.controller('resumeCtrl', ['$window', function($window){
	$window.location.href = 'http://www.madebysid.com/resume.pdf';
	console.log('Redirect');
}])



/*

	DIRECTIVES

*/

app.directive('header',function(){
	return {
		templateUrl: 'templates/header.html',
		controller: 'mainCtrl'
	}
});

app.directive('footer',function(){
	return {
		templateUrl: 'templates/footer.html'
	}
});