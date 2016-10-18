var myApp = angular.module('DemoApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider
                .when('/', {
                    templateUrl: 'views/carList.html',
                    controller: 'CarListController',
                    controllerAs: 'carListCtrl'
                })
                .when('/addCar', {
                    templateUrl: 'views/addCar.html',
                    controller: 'AddEditCarController',
                    controllerAs: 'addEditCarCtrl'
                })
                .when('/editCar/:carId', {
                    templateUrl: 'views/editCar.html',
                    controller: 'AddEditCarController',
                    controllerAs: 'addEditCarCtrl'
                })
                .otherwise({
                    redirectTo: '/'
                });
    }]);

myApp.factory('CarFactory', ['$http', '$q', function ($http, $q) {
    var apiUrl = 'api/car';
    
    var getCars = function () {
        var q = $q.defer();
        
        $http.get(apiUrl).then(function(response) {
            q.resolve(response.data);
        }, function(response) {
            q.reject(response.data);
        });
        
        return q.promise;
    };
    
    var getCarById = function (id) {
        var q = $q.defer();
        
        $http.get(apiUrl + '/' + id).then(function(response) {
            q.resolve(response.data);
        }, function(response) {
            q.reject(response.data);
        });
        
        return q.promise;
    };
    
    var deleteCar = function (id) {
        var q = $q.defer();
        
        $http.delete(apiUrl + '/' + id).then(function(response) {
            q.resolve(response.data);
        }, function(response) {
            q.reject(response.data);
        });
        
        return q.promise;
    };
    
    var addCar = function (newcar) {
        var q = $q.defer();
        
        $http.put(apiUrl).then(function(response) {
            q.resolve(response.data);
        }, function(response) {
            q.reject(response.data);
        });
        
        return q.promise;
    };
    
    var editCar = function (id, car) {
        var q = $q.defer();
        
        $http.post(apiUrl + '/' + id).then(function(response) {
            q.resolve(response.data);
        }, function(response) {
            q.reject(response.data);
        });
        
        return q.promise;
    };
    
    return {
        getCars: getCars,
        getCarById: getCarById,
        deleteCar: deleteCar,
        addCar: addCar,
        editCar: editCar
    };
}]);

myApp.controller('CarController', [function () {
        var self = this;

        self.title = "Cars Demo App";
    }]);

myApp.controller('CarListController', ['CarFactory', function (CarFactory) {
        var self = this;
        
        self.predicate = "year";
        self.reverse = false;
        self.nextId = 5;
        
        self.getCars = function() {
            CarFactory.getCars().then(function(response) {
                self.cars = response;
                console.log(response);
            });
        };
        
        self.deleteCar = function (carId) {
            CarFactory.deleteCar(carId).then(function(response) {
                self.getCars();
                console.log(response);
            });
        };
        
        self.getCars();
    }]);

myApp.controller('AddEditCarController', ['$scope', '$routeParams', 'CarFactory', function ($scope, $routeParams, CarFactory) {
        var self = this;

        self.cars = CarFactory.getCars();
        self.carId = $routeParams.carId;
        self.car = CarFactory.getCarById(self.carId).then(function(response) {
            self.car = response;
            console.log(response);
        });
        
        self.addEditCar = function (car) {
            CarFactory.addEditCar(car).then(function(response) {
                console.log(response);
            });
        };
    }]);