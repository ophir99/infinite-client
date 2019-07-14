var app = angular.module("appI", []);

(function(app) {
  cObj.$inject = ["PostsService", "$scope"];
  function cObj(postsService, $scope) {
    $scope.todos = [];
    var container = document.querySelector(".con");
    var start = 0;
    var end = 30;
    postsService.getData(start, end).then(function(res) {
      var response = res.data;
      for (let i = 0; i < response.length; i++) {
        $scope.todos.push(response[i]);
        // $scope.$apply();
      }
      start = start + 30;
      end = end + 30;
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
          for (let i = 0; i < response.length; i++) {
            $scope.todos.push(response[i]);
            // $scope.$apply();
          }
          start = start + 30;
          end = end + 30;
        });
      }
    });
  }

  app.controller("Simple", cObj);
})(app);
