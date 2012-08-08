angular.module('tw.directives', [])
    .directive('twKeydown', function () {
        return {
            restrict:'A',
            link:function (scope, element, attrs) {
                $(document).keydown(function (event) {
                    scope[attrs['twKeydown']](String.fromCharCode(event.which));
                });
            }
        };
    });

