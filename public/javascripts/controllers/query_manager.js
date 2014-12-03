//query_manager.js

angular.module('ChumpChangeChowChamberApp')
  .controller('QueryManagerCtrl', function ($scope , $rootScope ) {

  /***
  $scope.results 
  ***/
  
  $rootScope.$on('invokeRecipeSearch', function () {
    console.log("Invoking.....");
  });
  
});
