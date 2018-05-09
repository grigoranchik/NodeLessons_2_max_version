angular.module("myApp",[]).controller('ctrlFofRightTable', ['$scope', '$timeout', '$http', '$q', function ($scope, $timeout, $http, $q) {

    debugger;

    $scope.path_RightTable = 'C://';
    $scope.renderData_RightTable = [];
    $scope.onSendEnterIn_LeftTable= function(val) {
        if($scope.path_RightTable == 'C://') {
            $scope.path_RightTable +=val;
        } else {
            $scope.path_RightTable += '//' + val;
        }
        sendMessage();

    };
    $scope.back_LeftTable = function () {
        if($scope.path_RightTable.lastIndexOf("//")>2){
            $scope.path_RightTable = $scope.path_RightTable.substring(0, $scope.path_RightTable.lastIndexOf("//"));
        } else{
            $scope.path_RightTable = $scope.path_RightTable.substring(0, $scope.path_RightTable.lastIndexOf("//")+2);
        }

        sendMessage();
    }
    $scope.onSendNewMessageClicked = function () {
        sendMessage();
    };


    function sendMessage() {
        //debugger;
        var path_of_tables = $scope.path_RightTable;

        var promise = $http.post('/send_path', {newPath: path_of_tables}, {});
        promise.then(function (response) {
            $scope.renderData_RightTable = response.data.massOfFiles;

        });
    }

    sendMessage();
}]);