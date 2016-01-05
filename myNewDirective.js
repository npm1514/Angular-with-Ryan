angular.module("class").directive("myNewDir", function(){
  return {
    templateUrl: "myNewDir.html",
    restrict: 'E',
    scope: {
      firstName: '=',
      test: '='
    },
    link: function(scope, element, attributes) {
      element.css("color: yellow");
    },
    controller: function($scope, mainService) {
      $scope.getData = function () {
        $scope.myRandomArray = mainService.returnSomeData();
      };
    }
  };
});
