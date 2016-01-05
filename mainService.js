angular.module("class").service("mainService", function() {
  this.returnSomeData = function() {
    return [1,2,3,4,5];
  };
});
