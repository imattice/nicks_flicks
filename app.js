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
        url:'/reviews/:reviewId',
        views: {
            'header': {
                templateUrl:'partials/header.html',
                controller:'HeaderCtrl'
            },
            'reviews': {
                templateUrl:'partials/reviews.html',
                controller:'ReviewsCtrl'
            },
            'new-review': {
                templateUrl:'partials/new_review.html',
                controller:'ReviewsCtrl'
            },
            'display-review': {
                templateUrl:'partials/selected_review.html',
                controller:'ReviewsCtrl'
            }
        }
    });

    // $stateProvider.state('display_review', {
    //     url:'/reviews/:reviewId',
    //     views: {
    //         'header': {
    //             templateUrl:'partials/header.html',
    //             controller:'HeaderCtrl'
    //         },
    //         'display_review': {
    //             templateUrl: 'partials/selected_review.html',
    //             controller: 'ReviewsCtrl'
    //         }
    //     }
    // });
});
