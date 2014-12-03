//javascript/whats_in_the_pantry/whats_in_the_pantry_controller.js
angular.module('ChumpChangeChowChamberApp')
  .controller('whatsInThePantryCtlr', function ($scope, $rootScope, recipeQuery) {
  
    console.log ("What's in the pantry?");
    
    $scope.pantryList = 'Onion, garlic';
    $scope.pantryArray = [];
    $scope.recipeQuery = recipeQuery;
    
    $scope.$watch('pantryList' ,function ( newValue, oldValue ) {
      $scope.pantryArray = $scope.pantryList.split(',');
      
      console.log ("pantryList changed:",arguments);
    });
    
    $scope.$watch('pantryArray' , function (newValue, oldValue) {
      console.log ("pantryArray Changed as a result..." , arguments);
      if (newValue.length != oldValue.length) {
        angular.forEach ( newValue , function ( ingredient ){
          ingredient = ingredient.trim();
          console.log ("searching for: " , ingredient )
          if ( ingredient.length ) {
            $rootScope.$emit('invokeRecipeSearch', {query: $scope.recipeQuery.getIngredientQueryParam(ingredient) } );
          }
        }) 
      }
    })
  
  });