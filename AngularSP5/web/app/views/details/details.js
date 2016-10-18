angular.module('userApp').controller('DetailsController',['$scope','$stateParams', '$http', function($scope, $stateParams, $http) {
    $scope.title = "Details";

    $http.get('assets/data/data.json').then(function (response) {

        var users = response.data.users;

        users.forEach(function(e) {
            if (e.id == $stateParams.id) {
                $scope.user = e;
            }
        });

    }, function () {
        console.error("An error occurred");
    });

}]);
