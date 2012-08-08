angular.module('tw.directives', [])
    .directive('twDocumentKeydown', ['$parse', '$rootElement', function ($parse, $rootElement) {
        return {
            restrict:'A',
            link:function (scope, element, attrs) {
                var expr = $parse(attrs['twDocumentKeydown']);
                $rootElement.keydown(function (event) {
                    scope.$apply(function(scope) {
                        expr(scope, {key:String.fromCharCode(event.which)});
                    });
                });
            }
        };
    }]);
