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
		.when('/work', {
			templateUrl: 'templates/test.html',
			controller: 'workCtrl'
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
		'work': false,
		'contact': false
	};
}])

app.service('pageTransition', ['$timeout', function($timeout){

	this.speeds = {
		'1': 1,
		'2': 1.5,
		'3': 2,
		'4': 2.5,
		'5': 3,
	};

	this.doTheMacarena = function(barNo, speed){
		// speed = 1/speed;
		var rectElement = angular.element(document.querySelector('.rect' + barNo));

		rectElement.css('-webkit-transform', 'rotate(-45deg) translate(-20%,-1200%)');
		rectElement.css('transition', (speed) + 's');
		
		$timeout(function(){
			rectElement.css('-webkit-transform', 'rotate(-45deg) translate(-20%,-1200%)');
		},0);
		$timeout(function(){
			rectElement.css('-webkit-transform', 'rotate(-45deg) translate(-20%,1200%)');
		},speed);

		$timeout(function(){
			rectElement.css('transition', '0s');
		},200 + speed*1000);

		$timeout(function(){
			rectElement.css('-webkit-transform', 'rotate(-45deg) translate(-20%,-1200%)');
		},300 + speed*1000);
	}
	this.animate = function(){
		for(speed in this.speeds){
			this.doTheMacarena(speed, this.speeds[speed]);
		}
	}
}]);






















/*

	CONTROLLERS

*/

app.controller('mainCtrl', ['$scope', '$location', 'activeTab', 'pageTransition', function($scope, $location, activeTab, pageTransition) {
	$scope.activeOrNot = activeTab.active;

	$scope.$on('$locationChangeStart', function(){
		for(x in activeTab.active)
			activeTab.active[x] = false;
		activeTab.active[$location.url().slice(1)] = true;
		$scope.activeOrNot = activeTab.active;

		$scope.loader = true;
		pageTransition.animate();
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

app.controller('workCtrl', ['$scope', function($scope){
	$scope.pageTitle = "Work";
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
		templateUrl: 'templates/footer.html',
		controller: 'mainCtrl'
	}
});