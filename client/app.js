/// <reference path="_all.ts"/>
var logrc;
(function (logrc_1) {
    'use strict';
    var logrc = angular.module('logrc', ['ngRoute']);
    logrc
        .controller('inventoryController', logrc_1.controller.InventoryController)
        .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/inventory.html',
            controller: 'InventoryController'
        });
    });
})(logrc || (logrc = {}));
//# sourceMappingURL=app.js.map