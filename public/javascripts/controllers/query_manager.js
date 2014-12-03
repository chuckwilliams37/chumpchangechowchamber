//query_manager.js

angular.module('ChumpChangeChowChamberApp')
  .controller('QueryManagerCtrl', function ($scope , $rootScope, recipeQuery, Restangular ) {

  $scope.recipeQuery = recipeQuery;
  $scope.recipes = Restangular.one('recipes');
  $scope.recipePromises = [];
  /***
  $scope.results 
  ***/
  
  $rootScope.$on('invokeRecipeSearch', function ( event ) {
    console.log("Invoking.....", arguments);
    
    if ( $scope.recipeQuery.pantryArray.length ) {
      for ( var i =0; i< $scope.recipeQuery.pantryArray.length; i++ ){
        var ingredient = $scope.recipeQuery.pantryArray[i].trim();
        console.log ("searching for: " , ingredient )
        if ( ingredient.length ) {
          $scope.recipePromises.push( $scope.recipes.get(  $scope.recipeQuery.getQueryStringObj( i ) ).then( $scope.onRecipeResult) );
        };
      };
    };
  });
  
  
  $scope.$watch ('recipePromises' , function (newValue, oldValue) {
    console.log ('promise sent');
  });
  
  $scope.onRecipeResult = function ( recipeResult ) {
    console.log( "got some results: " , recipeResult );
  } ;
  
  
  
});
