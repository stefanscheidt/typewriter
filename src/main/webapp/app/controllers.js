function TwController($scope) {
    $scope.processKey = function (key) {
        console.log('processKey: ' + key);
    }
}
TwController.$inject = ['$scope'];

