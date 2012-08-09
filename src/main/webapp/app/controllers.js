function TwController($scope, twService) {
    $scope.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $scope._statistics = {};
    $scope.challenge = twService.nextChallenge($scope.characters);

    $scope.handleKeydown = function(event) {
        var pressedKey = String.fromCharCode(event.which);
        console.log(pressedKey);
        twService.evaluateKeypress(pressedKey, $scope.challenge, $scope.statistics($scope.challenge.char));
        $scope.challenge = twService.nextChallenge($scope.characters);
    }

    $scope.statistics = function(char) {
        if ($scope._statistics[char] == undefined) {
            $scope._statistics[char] = twService.initStatistic(char);
        }
        return $scope._statistics[char];
    }
}
TwController.$inject = ['$scope', 'twService'];

var module = angular.module('tw.controllers', ['tw.services']);
module.controller('twController', TwController);
