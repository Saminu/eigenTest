/**
 * Created by simba on 22/10/2016.
 */
var app = angular.module('app', []);
app.controller('Ctrl', function ($scope, $http) {
    $scope.words_list = [];

    $http.get("http://127.0.0.1:8085/api/v1/text").success(function (data) {
        //display data from -1 len()
        $scope.parag_data = data;
        console.log($scope.parag_data);
    });

    $scope.highlightSelection = function () {
        var selection, selection_string;

        //Get the selected text
        if (window.getSelection)
            selection = window.getSelection();
        else if (typeof document.selection != "undefined")
            selection = document.selection;

        selection_string = selection.toString();

        //Get a the selected content, in a range object
        var range = selection.getRangeAt(0);

        //If the range spans some text, and inside a tag, set its css class.
        if (range && !selection.isCollapsed) {
            if (selection.anchorNode.parentNode == selection.focusNode.parentNode) {
                var span = document.createElement('span');
                span.className = 'highlight';
                range.surroundContents(span);
            }
        }

        return selection_string;
    };

    $scope.highlightText = function(){

        //Get  the returned text string
        var theText = $scope.highlightSelection();

        //If the string is not empty, push to the word_lists selection
        if (theText.length > 0){
            $scope.words_list.push({"text":theText})
            //console.log($scope.words_list)
        }
    };

    $scope.highlightRemove = function (index) {
        var array_list = $scope.words_list;
        //Remove selection list
        for(i in array_list){
            if (i == index){
                array_list.splice(i,1);
            }
        }
    }
});