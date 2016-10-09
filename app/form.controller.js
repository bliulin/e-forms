(function () {

    var app = angular.module("eformsApp");
    
    var FormController = function ($scope, $location, $routeParams, formsService) {
        var vm = this;
        $scope.form = {};

        var onGetFormsCompleted = function(data) {
            $scope.form = data;
            $scope.form.Template = JSON.stringify(data.Template);

            var buildWrap = document.querySelector('.build-wrap'),
            renderWrap = document.querySelector('.render-wrap'),
            editBtn = document.getElementById('edit-form'),
            formData = $scope.form.Template,
            editing = true,
            fbOptions = {
                dataType: 'json',
                formData: formData
            };

            var formBuilder = $(buildWrap).formBuilder(fbOptions).data('formBuilder');
            $('.form-builder-save').click(function(e) {
                vm.saveForm();
            });
        };
        
        var onError = function (response) {
            $scope.error = "Could not fetch the data because: " + response.data.message;
        };

        vm.saveForm = function() {
            formsService.saveForm($routeParams.id, $scope.form.Template).then(function() {
                alert('Formularul a fost salvat!');
                window.location = '/';
            });
        };

        formsService.getFormById($routeParams.id).then(onGetFormsCompleted, onError);
    };

    app.controller("FormController", ["$scope", "$location", "$routeParams", "formsService", FormController]);

}());