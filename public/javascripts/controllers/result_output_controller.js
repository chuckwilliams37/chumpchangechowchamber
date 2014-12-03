//result_output_controller.js
angular.module('ChumpChangeChowChamberApp')
  .controller('ResultOutputCtlr', function ($scope , $rootScope ) {

  /***
  $scope.results 
  ***/
  
  $scope.doRecipeSearch = function () {
    console.log ('invokeRecipeSearch');
    $rootScope.$emit('invokeRecipeSearch');
  }
  
});
