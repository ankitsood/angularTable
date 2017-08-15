(function () {
    "use strict";

    tableApp.controller('tableCtrl', ['$scope', 'tableDataService', controllerDefination]);

    /** @ngInject */
    function controllerDefination($scope, tableDataService) {
        tableDataService.getItemData().then(function (data) {
            $scope.posts = data;
           // console.log($scope.TableData);

        })



    }

})();