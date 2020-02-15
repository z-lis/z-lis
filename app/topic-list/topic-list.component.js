angular.
  module('designApp').
  component('topicList', {
    templateUrl: 'app/topic-list/topic-list.template.html',
    controller: function TopicListController($scope) {
      $scope.topics = [
        {
          id: 1,
          title: 'UML Use Case',
          description: 'Диаграмма прецедента',
          preview: 'https://s.plantuml.com/imgw/sequence-diagram-fwsz6ibo.png'
        },
        {
          id: 2,
          title: 'UML Class',
          description: 'Диаграмма классов',
          preview: 'https://s.plantuml.com/imgw/sequence-diagram-fwsz6ibo.png'
        },
      ];
    }
  });