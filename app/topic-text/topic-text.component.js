angular.
    module('designApp').
    component('topicText', {
        bindings: {
            data: '=',
          },
        templateUrl: 'app/topic-text/topic-text.template.html',
        controller: function TopicTextController() {
            
        }
    });