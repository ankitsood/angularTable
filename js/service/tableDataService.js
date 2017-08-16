(function () {
  'use strict';


  tableApp.factory("tableDataService", factoryDefination);

  /** @ngInject */
  function factoryDefination($http) {
    var getItemData = function () {
      return $http.get("//jsonplaceholder.typicode.com/posts").then(
        function successFunc(response) {
          return response.data;
        },
        function errorFunc(response) {
          return null;
        }
      );
    };

    return {
      getItemData: getItemData
    };
  }

})();