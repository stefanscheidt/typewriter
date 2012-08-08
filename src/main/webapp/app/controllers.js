function TwController($scope) {
    $scope.currentChar = 'A';
    $scope.processKeydown = function (event) {
        var key = String.fromCharCode(event.which);
        console.log('processKey: ' + key);
        $scope.currentChar = key;
    }
}
TwController.$inject = ['$scope'];

