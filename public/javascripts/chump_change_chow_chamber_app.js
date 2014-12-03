//ChumpChangeChowChamberApp.js

angular.module('ChumpChangeChowChamberApp', ['ui.bootstrap','restangular','ngRoute', 'ngAnimate'])
.config(
  function($routeProvider, RestangularProvider) {
    var yummly = {
      appId : 'a86b6d59',
      key : 'a7c56372c0412e6698ec5d34d33f9101',
      baseUrl: "https://api.yummly.com/v1/api"
    };
    
    RestangularProvider.setBaseUrl(yummly.baseUrl);
    RestangularProvider.setDefaultRequestParams({_app_id: yummly.appId , _app_key: yummly.key });
    /*
    */
    
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
}).controller('applicationController', function ($scope,$rootScope) {
  $rootScope.$on('invokeRecipeSearch', function () {
    console.log('I heard we should be searching for something.');
  })
});