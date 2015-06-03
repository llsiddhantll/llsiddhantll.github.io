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
			templateUrl: 'templates/test.html',
			controller: 'aboutCtrl'
		})
		.when('/portfolio', {
			templateUrl: 'templates/test.html',
			controller: 'portfolioCtrl'
		})
		.when('/blog', {
			templateUrl: 'templates/test.html',
			controller: 'blogCtrl'
		})
		.when('/contact', {
			templateUrl: 'templates/test.html',
			controller: 'contactCtrl'
		})
		.when('/resume',{
			template: '<div><div>',
			controller: 'resumeCtrl'
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
	$scope.pageTitle = "Home";
}]);

app.controller('aboutCtrl', ['$scope', function($scope){
	$scope.pageTitle = "About";
}]);

app.controller('portfolioCtrl', ['$scope', function($scope){
	$scope.pageTitle = "Portfolio";
}]);

app.controller('blogCtrl', ['$scope', function($scope){
	$scope.pageTitle = "Blog";
}]);

app.controller('contactCtrl', ['$scope', function($scope){
	$scope.pageTitle = "Contact";
}]);

app.controller('resumeCtrl', ['$window', function($window){
	$window.location.href = 'http://www.madebysid.com/resume.pdf';
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