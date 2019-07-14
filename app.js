var app = angular.module("appI", []);

(function(app) {
  cObj.$inject = ["PostsService", "$scope"];
  function cObj(postsService, $scope) {
    $scope.todos = [];
    var container = document.querySelector(".con");
    var start = 0;
    // No of initial records to load
    // Change this based on your requirement and height of container
    // generally dont load more than 50.
    // Here i choosed thirty
    var end = 30;
    postsService.getData(start, end).then(function(res) {
      var response = res.data;
      processResponse(response);
    });

    angular.element(container).bind("scroll", function($event) {
      var start = $scope.todos.length;
      var end = start + 30;
      if (
        container.scrollHeight - container.scrollTop ===
        container.clientHeight
      ) {
        postsService.getData(start, end).then(function(res) {
          var response = res.data;
          processResponse(response);
        });
      }
    });

    function processResponse(resultArr) {
      for (let i = 0; i < resultArr.length; i++) {
        $scope.todos.push(resultArr[i]);
        // $scope.$apply();
      }
    }
  }

  app.controller("Simple", cObj);
})(app);
