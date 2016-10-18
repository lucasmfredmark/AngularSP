angular.module("personList", [
    "ui.router"
]);

angular.module("personList").config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url: "/",
            templateUrl: 'list.html',
            controller: "MainController"
        })
        .state('newPerson', {
            url: "/new-person",
            templateUrl: 'new-person.html',
            controller: "PersonController"
        })
        .state('details', {
            url: "/details/:id",
            templateUrl: 'details.html',
            controller: "PersonController"
        });
}]);

angular.module("personList").constant("persons",
    {
        personsReal: [
            {id: 1, name: 'Daniel', age: 22},
            {id: 2, name: 'Mohammed', age: 18},
            {id: 3, name: 'Chris', age: 12}
        ]
    }
);

angular.module("personList").controller("MainController", ['persons', '$scope', function (persons, $scope) {
    $scope.persons = persons.personsReal;
}]);

angular.module("personList").controller("PersonController", ['$stateParams', 'persons', '$scope', function ($stateParams, persons, $scope) {
    for (var i = 0, max = persons.personsReal.length; i < max; i++) {
        if (persons.personsReal[i].id == $stateParams.id) {
            $scope.person = persons.personsReal[i];
        }
    }

    $scope.addPerson = function () {
        persons.personsReal.push({id: persons.personsReal.length + 1, name: $scope.name, age: $scope.age});
    };
}]);

