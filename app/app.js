(function () {
    'use strict';
	
	var app = angular.module("eformsApp", ["ngRoute"]);
		
	app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
        $routeProvider            
            .when("/form/:id", {
                templateUrl: "/views/form.html",
                controller: "FormController"
            })
            .when("/forms", {
                templateUrl: "/views/form-list.html",
                controller: "HomeController"
            })                          
            .otherwise({
                redirectTo: "/forms"
                //templateUrl: "notfound.html"
            });
    }]);
	
})();