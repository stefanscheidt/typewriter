function TypewriterController($scope, typewriterService) {
    $scope.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $scope._statistics = {};
    $scope.challenge = typewriterService.nextChallenge($scope.characters);

    $scope.keypress = function(key) {
        console.log(key);
        typewriterService.evaluateKeypress(key, $scope.challenge, $scope.statistics($scope.challenge.char));
        $scope.challenge = typewriterService.nextChallenge($scope.characters);
        $scope.$digest();
    }

    $scope.statistics = function(char) {
        if ($scope._statistics[char] == undefined) {
            $scope._statistics[char] = typewriterService.initStatistic(char);
        }
        return $scope._statistics[char];
    }
}
TypewriterController.$inject = ['$scope', 'typewriterService'];

var module = angular.module('typewriterController', ['typewriterServices']);

module.controller('typewriterController', TypewriterController);