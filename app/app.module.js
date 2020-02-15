angular.module('design2App', [
  'ngMaterial',
  'topicList'
]).config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('teal');
});