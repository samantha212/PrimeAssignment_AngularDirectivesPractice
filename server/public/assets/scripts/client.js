/**
 * Created by samanthamusselman on 1/29/16.
 */
var app = angular.module('directiveApp', []);

app.controller('MainController', function($scope){
    $scope.hola = "Hola!";
    $scope.name = '';
    $scope.WELOVECURLYBRACKETS = "We hate curly brackets.";
    $scope.color = "tomato";
    $scope.options = ["tomato", "coral", "blanchedalmond", "lawngreen", "cornflowerblue"];
    $scope.down = false;
    $scope.myStyle = {
        "width": "100px",
        "height": "100px",
        "background-color": $scope.color
    };

    $scope.isNameJoe = function(){
        return $scope.name == 'Joe';
    };

    $scope.isNameSam = function(){
        return $scope.name == 'Sam';
    };
});