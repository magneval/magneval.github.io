'use strict';

angular.module('Cours', ['ngResource'])
.config(function ($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    })
    .otherwise({
        redirectTo: '/'
    });
})
.factory('Frameworks', function($resource) {
    return $resource('/frameworks/:id/:topic', {
        id: '@_id',
        headers: {
            'Content-Type': 'application/json'
        }

    });
});
