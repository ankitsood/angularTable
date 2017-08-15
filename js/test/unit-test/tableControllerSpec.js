describe('tableApp :tableController',function(){
beforeEach(module('tableApp'));
var $controller,$rootScope,$q,tableDataService,$scope,deferred;
var mockTableService;

  beforeEach(inject(function(_$controller_,$rootScope, _$q_, _tableDataService_) {
   // $rootScope = _$rootScope_;
    $scope=$rootScope.$new();
   // console.log($rootScope)
    $q = _$q_;
    $controller = _$controller_;
    tableDataService = _tableDataService_;
     deferred = _$q_.defer();
     spyOn(tableDataService, 'getItemData').and.returnValue(deferred.promise);
  }));

  var createController = function() {
    return $controller('tableCtrl', {
      $scope: $scope,
      tableDataService:tableDataService
    });
  };



  it('should resolve promise', function () {
    // Setup the data we wish to return for the .then function in the controller
    deferred.resolve([
            {
                "userId": 1,
                "id": 1,
                "title": "Sensible Title",
                "body": "Some thing in English"
            },
            {
                "userId": 2,
                "id": 2,
                "title": "Second Post",
                "body": "This is the Post Content"
            }]);
    
    // We have to call apply for this to work
    $scope.$apply();
    console.log($scope);
    // Since we called apply, not we can perform our assertions
    expect($scope.posts).not.toBe(undefined);
    expect($scope.error).toBe(undefined);
  });
  
  it('should reject promise', function () {
    // This will call the .catch function in the controller
    deferred.reject();
    
    // We have to call apply for this to work
    $scope.$apply();

    // Since we called apply, not we can perform our assertions
    expect($scope.results).toBe(undefined);
    //expect($scope.error).toBe('There has been an error!');
  });

});