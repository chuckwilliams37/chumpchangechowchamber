//ChumpChangeChowChamberApp.js

angular.module('ChumpChangeChowChamberApp', ['ui.bootstrap','restangular','ngRoute', 'ngAnimate'])
.config(['$routeProvider', 'restangular',
  function($routeProvider, RestangularProvider) {
    var yummly = {
      appId : a86b6d59,
      key : a7c56372c0412e6698ec5d34d33f9101,
      baseUrl: "https://ismaelc-yummly1.p.mashape.com/api"
    };
    
    RestangularProvider.setBaseUrl(yummly.baseUrl);
    RestangularProvider.setDefaultRequestParams({_app_id: yummly.appId , _app_key: yummly.key });
    
    
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