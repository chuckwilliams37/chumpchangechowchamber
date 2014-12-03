//query_manager.js

angular.module('ChumpChangeChowChamberApp')
  .controller('QueryManagerCtrl', function ($scope , $rootScope, recipeQuery, Restangular ) {

  $scope.recipeQuery = recipeQuery;
  $scope.recipes = Restangular.all('recipes');
  /***
  $scope.results 
  ***/
  
  $rootScope.$on('invokeRecipeSearch', function ( event ) {
    console.log("Invoking.....", arguments);
  });
  
});
