//ChumpChangeChowChamberApp.js

angular.module('ChumpChangeChowChamberApp', ['ui.bootstrap','restangular','ngRoute', 'ngAnimate'])
.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/whats_in_the_pantry', {
        templateUrl: '#/whats_in_the_pantry.html/',
        controller: 'whatsInThePantryCtlr',
        controllerAs: 'pantry'
      })
      /*
      .when('/Book/:bookId/ch/:chapterId', {
        templateUrl: 'chapter.html',
        controller: 'ChapterCtrl',
        controllerAs: 'chapter'
      });

    $locationProvider.html5Mode(true);
    */
}]);