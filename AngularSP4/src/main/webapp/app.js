var app = angular.module('MyApp',[]);
app.controller('MemberController', ['$http', '$scope', function($http, $scope) {
    $http.get('api/member')
        .then(
            function(response){
                console.log(response.data);
                $scope.members = response.data;
            },
            function(response){
                console.log(response);
            }
        );
}]);