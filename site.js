/*
	ANGULAR MODULE
*/

var app = angular.module('madeBySid', ['ui.router', 'ngAnimate']);



/*
	ROUTES
*/





app.config(['$urlRouterProvider', '$stateProvider',
    function($urlRouterProvider, $stateProvider) {
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
    }
]);



/*
	CONTROLLERS
*/



app.controller('homeCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.curLoc = $location.$$path.slice(1);
    }
]);

app.controller('aboutCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.curLoc = $location.$$path.slice(1);
    }
]);

app.controller('blogCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.curLoc = $location.$$path.slice(1);
    }
]);

app.controller('portfolioCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.curLoc = $location.$$path.slice(1);
    }
]);

app.controller('contactCtrl', ['$scope', '$location',
    function($scope, $location) {
        $scope.curLoc = $location.$$path.slice(1);
    }
]);





/*
	DIRECTIVES
*/



app.directive('header', function() {
    return {
        templateUrl: 'templates/header.html',
        replace: true
    }
});

app.directive('footer', function() {
    return {
        templateUrl: 'templates/footer.html',
        replace: true
    }
});