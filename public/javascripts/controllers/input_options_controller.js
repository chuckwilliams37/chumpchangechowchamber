//input_options_controller
angular.module('ChumpChangeChowChamberApp').controller('InputOptionsCtrl', function ($scope, recipeQuery) {

  $scope.recipeQuery = recipeQuery;

  console.log ($scope.recipeInputsForm);

  $scope.inputOptionGroups = [
    {
      isOpen: true
    },
    {
      isOpen: true
    },
    {
      isOpen: false
    },
    {
      isOpen: false
    },
    {
      isOpen: false
    }
  ];


});