//javascript/whats_in_the_pantry/whats_in_the_pantry_controller.js
angular.module('ChumpChangeChowChamberApp')
  .controller('whatsInThePantryCtlr', function ($scope, $rootScope, recipeQuery) {
  
    console.log ("What's in the pantry?");
    
    $scope.pantryList = 'Onion, garlic';
    $scope.pantryArray = null;
    $scope.recipeQuery = recipeQuery;
    
    $scope.$watch('pantryList' ,function ( newValue, oldValue ) {
      $scope.pantryArray = $scope.pantryList.split(',');
      
      console.log ("pantryList changed:",arguments);
    });
    
    $scope.$watch('pantryArray' , function (newValue, oldValue) {
      if (newValue.length != oldValue.length) {
        $rootScope.$emit('invokeRecipeSearch');
      }
    })
  
  });