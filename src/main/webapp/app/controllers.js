(function (angular) {

    function TwController($scope, twService) {
        $scope.characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
        $scope.cssClass = '';
        $scope._statistics = {};
        $scope.challenge = twService.nextChallenge($scope.characters);

        $scope.handleKeydown = function (event) {
            var pressedKey = String.fromCharCode(event.which);
            evaluatePressedKey(pressedKey);
            $scope.challenge = twService.nextChallenge($scope.characters);
        }

        $scope.statistics = function (char) {
            if ($scope._statistics[char] == undefined) {
                $scope._statistics[char] = twService.initStatistic(char);
            }
            return $scope._statistics[char];
        }

        function evaluatePressedKey(pressedKey) {
            var statistic = $scope.statistics($scope.challenge.char);
            var wasCorrect = twService.evaluateKey(pressedKey, $scope.challenge, statistic);
            $scope.cssClass = wasCorrect ? 'correct' : 'wrong';
        }
    }

    TwController.$inject = ['$scope', 'twService'];

    var module = angular.module('tw.controllers', ['tw.services']);
    module.controller('twController', TwController);

})(window.angular);
