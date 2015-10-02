var nicksFlicks = angular.module('nicksFlicks', ['ui.router']);

nicksFlicks.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url:'',
        views: {
            'header': {
                templateUrl:'partials/header.html',
                controller:'HeaderCtrl'
            },
            'body': {
                templateUrl:'partials/home.html'
            }
        }
    });

    $stateProvider.state('reviews', {
        url:'/reviews',
        views: {
            'header': {
                templateUrl:'partials/header.html',
                controller:'HeaderCtrl'
            },
            'body': {
                templateUrl:'partials/reviews.html',
                controller:'ReviewsCtrl'
            },
            'selected_review': {
                templateUrl:'partials/selected_review.html',
                controller:'ReviewsCtrl'
            }

        }
    });

    $stateProvider.state('selected_review', {
        url:'/:reviewId',
        views: {
            'header': {
                templateUrl:'partials/header.html',
                controller:'HeaderCtrl'
            },
            'body': {
                templateUrl: 'partials/selected_review.html',
                controller: 'ReviewsCtrl'
            }
        }
    });
});
