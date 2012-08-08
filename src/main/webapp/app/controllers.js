function TwController($scope) {
    $scope.currentChar = 'A';
    $scope.handleKeydown = function(event) {
        $scope.currentChar = String.fromCharCode(event.which);
    }
}
TwController.$inject = ['$scope'];

