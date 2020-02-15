angular.
  module('topicList').
  component('topicList', {
    templateUrl: 'app/topic-list/topic-list.template.html',
    controller: function TopicListController() {
      this.topics = [
        {
          id: 1,
          title: 'UML Use Case',
          description: 'Диаграмма прецедента'
        },
        {
          id: 2,
          title: 'UML Class',
          description: 'Диаграмма классов'
        },
      ];
    }
  });