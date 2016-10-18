angular.module('userApp').controller('HomeController', ['$scope', '$stateParams', '$http', function ($scope, $stateParams, $http) {

    $scope.title = "Home";

    $http.get('assets/data/data.json').then(function (response) {
        $scope.users = response.data.users;
    }, function () {
        console.error("An error occurred");
    });

}]);