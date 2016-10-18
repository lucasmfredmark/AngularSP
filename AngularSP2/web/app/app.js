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

myApp.factory('CarFactory', function () {
    var cars = [
        {id: 1, year: 1997, registered: new Date(1999, 3, 15), make: 'Ford', model: 'E350', description: 'ac, abs, moon', price: 3000}
        , {id: 2, year: 1999, registered: new Date(1996, 3, 12), make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
        , {id: 3, year: 2000, registered: new Date(199, 12, 22), make: 'Chevy', model: 'Venture', description: '', price: 5000}
        , {id: 4, year: 1996, registered: new Date(2002, 3, 15), make: 'Jeep', model: 'Grand Cherokee', description: 'Moon roof', price: 4799}];
    var nextId = 5;
    var getCars = function () {
        return cars;
    };
    var getCarById = function(carId) {
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].id == carId) {
                return cars[i];
            }
        }
    };
    var deleteCar = function (id) {
        for (var i = 0; i < cars.length; i++) {
            if (cars[i].id === id) {
                cars.splice(i, 1);
                return;
            }
        }
    };
    var addEditCar = function (newcar) {
        if (newcar.id === null || newcar.id === undefined) {
            newcar.id = nextId++;
            cars.push(newcar);
        } else {
            for (var i = 0; i < cars.length; i++) {
                if (cars[i].id === newcar.id) {
                    cars[i] = newcar;
                    break;
                }
            }
        }
    };
    return {
        getCars: getCars,
        getCarById: getCarById,
        deleteCar: deleteCar,
        addEditCar: addEditCar
    };
});

myApp.controller('CarController', [function () {
        var self = this;
        
        self.title = "Cars Demo App";
    }]);

myApp.controller('CarListController', ['CarFactory', function (CarFactory) {
        var self = this;
        
        self.predicate = "year";
        self.reverse = false;
        self.nextId = 5;
        self.cars = CarFactory.getCars();
        
        self.deleteCar = function(carId) {
            CarFactory.deleteCar(carId);
            self.cars = CarFactory.getCars();
        };
}]);

myApp.controller('AddEditCarController', ['$scope', '$routeParams', 'CarFactory', function ($scope, $routeParams, CarFactory) {
        var self = this;
        
        self.cars = CarFactory.getCars();
        self.carId = $routeParams.carId;
        $scope.car = CarFactory.getCarById(self.carId);
        
        self.addEditCar = function(car) {
            CarFactory.addEditCar(car);
        };
    }]);