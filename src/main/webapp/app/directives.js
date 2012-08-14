(function (angular) {

    function twDocumentKeydown($parse, $rootElement) {
        return {
            restrict:'A',
            link:function (scope, element, attrs) {
                var expr = $parse(attrs['twDocumentKeydown']);
                $rootElement.keydown(function (event) {
                    scope.$apply(function (scope) {
                        expr(scope, {event:event});
                    });
                });
            }
        };
    }

    twDocumentKeydown.$inject = ['$parse', '$rootElement'];

    var module = angular.module('tw.directives', []);
    module.directive('twDocumentKeydown', twDocumentKeydown);

})(window.angular);
