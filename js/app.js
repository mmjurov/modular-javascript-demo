angular.module('app', ['application.controller'])
    .controller('ApplicationController', ['$scope', 'controller', function($scope, controller) {
        controller.init();
    }]);