(function(app) {
  serviceObj.$inject = ["$http"];
  function serviceObj($http) {
    console.log("HTTP", $http);

    return {
      getPosts: getPosts,
      getData: getData
    };

    function getPosts() {
      return $http.get("https://jsonplaceholder.typicode.com/todos/");
    }
    function getData(start, end) {
      return $http.get(
        "http://localhost:8080/posts?start=" + start + "&" + "end=" + end
      );
    }
  }
  app.service("PostsService", serviceObj);
})(app);
