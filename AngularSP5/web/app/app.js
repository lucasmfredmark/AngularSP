// Dependencies
angular.module('userApp', [
    'ui.router'
]);

// Routes
angular.module('userApp').config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/views/home/home.html',
            controller: "HomeController"
        })

        .state('details', {
            url: '/:id',
            templateUrl: 'app/views/details/details.html',
            controller: 'DetailsController'
        });

}]);