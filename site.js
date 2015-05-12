/*
	ANGULAR MODULE
*/

var app = angular.module('madeBySid', ['ngRoute']);
app.run(['$rootScope', function($rootScope){
	$rootScope.$on("$locationChangeStart", function(event, next, current) { 
		if(next==current && next=='/newproject')
		    event.preventDefault();
		    $state.go('home');
	});
}]);



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
	$scope.$on('$locationChangeSuccess', function(evt, newValue, oldValue){
		$scope.headerStyle = {'background-color': colors.heroColors[$location.path().slice(1)]};
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