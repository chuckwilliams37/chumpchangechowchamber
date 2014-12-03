//query_manager.js

angular.module('ChumpChangeChowChamberApp')
  .controller('QueryManagerCtrl', function ($scope , $rootScope, recipeQuery, Restangular ) {

  $scope.recipeQuery = recipeQuery;
  $scope.recipes = Restangular.one('recipes');
  $scope.recipePromises = [];
  /***
  $scope.results 
  ***/
  
  $rootScope.$on('invokeRecipeSearch', function ( event, queryObj ) {
    console.log("Invoking.....", arguments);
    $scope.recipePromises.push( $scope.recipes.get(queryObj.query).then( $scope.onRecipeResult) );
    
    
  });
  
  
  $scope.$watch ('recipePromises' , function (newValue, oldValue) {
    console.log ('promise sent');
  });
  
  $scope.onRecipeResult = function ( recipeResult ) {
    console.log( "got some results: " , recipeResult );
  } ;
  
  
  
});
