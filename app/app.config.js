angular.
    module('designApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/topics', {
                    template: '<topic-list></topic-list>'
                }).
                when('/about', {
                    template: '<about></about>'
                }).
                when('/topic/:topicId', {
                    template: ''
                }).
                otherwise('/topics');
    }]).
    config(function ($mdIconProvider) {
        $mdIconProvider.fontSet('md', 'material-icons');
    });