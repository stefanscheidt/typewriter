angular.module('typewriter', ['typewriterController']);

$(document).ready(function(window) {
    var scope = angular.element($("#typewriter")).scope();
    jQuery(document).keydown(function (event) {
        scope.keypress(String.fromCharCode(event.which));
    });
});
