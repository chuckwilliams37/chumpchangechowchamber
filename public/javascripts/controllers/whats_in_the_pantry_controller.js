//javascript/whats_in_the_pantry/whats_in_the_pantry_controller.js
angular.module('ChumpChangeChowChamberApp')
  .controller('whatsInThePantryCtlr', function ($scope, $rootScope, recipeQuery) {
  
    console.log ("What's in the pantry?");
    
    $scope.recipeQuery = recipeQuery;
    $scope.pantryList = recipeQuery.pantryArray.join(',');
    
    $scope.$watch('pantryList' ,function ( newValue, oldValue ) {
      $scope.recipeQuery.pantryArray = $scope.pantryList.split(',');
      
      console.log ("pantryList changed:",arguments);
    });
    
    $scope.$watch('recipeQuery.pantryArray' , function (newValue, oldValue) {
      console.log ("pantryArray Changed as a result..." , arguments);
      if (newValue.length != oldValue.length) {
        $rootScope.$emit('invokeRecipeSearch'); 
      }
    })
  
  });