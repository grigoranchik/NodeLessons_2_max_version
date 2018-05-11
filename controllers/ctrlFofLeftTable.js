angular.module("myApp",[]).controller('ctrlFofLeftTable', ['$scope', '$timeout', '$http', '$q', function ($scope, $timeout, $http, $q) {

    debugger;
    $scope.path_LeftTable = 'C://';
    $scope.renderData_LeftTable = [];
    $scope.onSendEnterIn_LeftTable= function(val) {
        if($scope.path_LeftTable == 'C://') {
            $scope.path_LeftTable +=val;
        } else {
            $scope.path_LeftTable += '//' + val;
        }
        sendMessage();

    };
    $scope.back_LeftTable = function () {
            if($scope.path_LeftTable.lastIndexOf("//")>2){
                $scope.path_LeftTable = $scope.path_LeftTable.substring(0, $scope.path_LeftTable.lastIndexOf("//"));
            } else{
                $scope.path_LeftTable = $scope.path_LeftTable.substring(0, $scope.path_LeftTable.lastIndexOf("//")+2);
            }

            sendMessage();
    }
    $scope.onSendMess_LeftTable = function () {
        sendMessage();
    };


    function sendMessage() {
        //debugger;
        var path_of_tables = $scope.pathLeftTable;

        var promise = $http.post('/send_path', {newPath: path_of_tables}, {});
        promise.then(function (response) {
            $scope.renderData_LeftTable = response.data.massOfFiles;

        });
    }

    sendMessage();
}]);
