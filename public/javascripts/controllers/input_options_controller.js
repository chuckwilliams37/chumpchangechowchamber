//input_options_controller
angular.module('ChumpChangeChowChamberApp').controller('InputOptionsCtrl', function ($scope) {

  $scope.inputOptionGroups = [
    {
      title: "What's in the pantry?",
      isOpen: true
    },
    {
      title: "What's in the fridge?",
      isOpen: true
    },
    {
      title: "In the mood for a cuisine?",
      isOpen: false
    },
    {
      title: "What's in the pantry?",
      isOpen: false
    }
  ];


});