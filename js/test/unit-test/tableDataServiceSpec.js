describe('tableApp tableDataService: getter tests', function () {

    beforeEach(module('tableApp'));
    beforeEach(inject(function (_$httpBackend_) {
        $httpBackend = _$httpBackend_;

        $httpBackend.whenGET('http://jsonplaceholder.typicode.com/posts').respond([
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
            }]
        )

    })
    );
    //  var tableDataService;




    describe('test if the correct data is being returned', function () {
        var returnedData;
        beforeEach(inject(function ($injector) {
            tableDataService = $injector.get('tableDataService');
            tableDataService.getItemData().then(function (data) {
                returnedData = data;
            });
            $httpBackend.flush();
        }));


        afterEach(function () {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should return data ', function () {
            expect(returnedData).toBeDefined();
        });
        it('data must have correct length', function () {
            expect(returnedData.length).toEqual(2);
        });
        it('check if correct data is returned ', function () {
            expect(returnedData[1].userId).toEqual(2);
            expect(returnedData[1].id).toEqual(2);
            expect(returnedData[1].title).toEqual('Second Post');
            expect(returnedData[1].title).toEqual('Second Post');
            expect(returnedData[1].body).toEqual('This is the Post Content');

        });

    });
});