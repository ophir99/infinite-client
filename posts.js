(function(app) {
  serviceObj.$inject = ["$http"];
  function serviceObj($http) {
    console.log("HTTP", $http);

    return {
      getData: getData
    };
    function getData(start, end) {
      return $http.get(
        "http://localhost:8080/posts?start=" + start + "&" + "end=" + end
      );
    }
  }
  app.service("PostsService", serviceObj);
})(app);
