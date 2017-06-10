(function () {
    'use strict';
    angular.module('app',
        [
            'ngMaterial',
            'ngAnimate',
            'ui.router',
        ]).config(function ($stateProvider, $urlRouterProvider) {

            $stateProvider.state('home', {
                url: '/home',
                templateUrl: 'modules/home/home.html',
                controller: "ctrl"
            });
            $stateProvider.state('about', {
                url: '/about',
                templateUrl: 'modules/about/about.html',
                controller: ['$scope', function ($scope) {
                    $scope.test = "From about controller";
                }]
            });
            $stateProvider.state('services', {
                url: '/services',
                templateUrl: 'modules/services/services.html',
                controller: ["$scope", function ($scope) {
                    $scope.test = "From services controller";
                }]
            });
            $stateProvider.state('portfolio', {
                url: '/portfolio',
                templateUrl: 'modules/portfolio/portfolio.html',
                controller: ["$scope", function ($scope) {
                    $scope.test = "From portfolio controller";
                }]
            })
            $stateProvider.state('contact', {
                url: '/contact',
                templateUrl: 'modules/contact/contact.html',
                controller: ["$scope", function ($scope) {
                    $scope.test = "From contact controller";
                }]
            })
        })


        .controller('ctrl', function ($scope, $location) {
            $scope.test = 'dave';
            $location.path("/home");
        });

})();