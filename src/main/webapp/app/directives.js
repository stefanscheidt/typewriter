angular.module('tw.directives', [])
    .directive('twDocumentKeydown', function () {
        return {
            restrict:'A',
            link:function (scope, element, attrs) {
                $(document).keydown(function (event) {
                    scope[attrs['twDocumentKeydown']](event);
                    scope.$digest();
                });
            }
        };
    });

