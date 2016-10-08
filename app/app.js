(function () {
    'use strict';
	
	var app = angular.module("eformsApp", ["ngRoute"]);
		
	app.config(function ($routeProvider) {
        $routeProvider            
            .when("/forms/:id", {
                templateUrl: "/views/form",
                controller: "FormController"
            })
            .when("/", {
                templateUrl: "index.html",
                controller: "HomeController"
            })     
            .when("/ceva", {
                templateUrl: "index",
                controller: "HomeController"
            })         
            .otherwise({
                redirectTo: "/"
                //templateUrl: "notfound.html"
            });
    });
	
})();