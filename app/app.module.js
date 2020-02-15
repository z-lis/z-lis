angular.module('designApp', [
  'ngMaterial',
  'ngRoute'
]).config(function ($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('deep-purple')
    .accentPalette('teal');
});