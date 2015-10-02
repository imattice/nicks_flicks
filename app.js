var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url:'',
        views: {
            'header': {
                templateUrl:'partials/header.html',
            },
            'body': {
                templateUrl:'partials/home.html'
            },
        }
    });

    $stateProvider.state('reviews', {
        url:'reivews',
        views: {
            'header': {
                templateUrl:'partials/header.html',
            },
            'body': {
                templateUrl:'partials/reviews.html'
            },
        }
    });
});
