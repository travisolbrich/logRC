/// <reference path="_all.ts"/>

module logrc {
    'use strict';

    var logrc = angular.module('logrc', ['ngRoute']);

    logrc
        .controller('inventoryController', controller.InventoryController)
        .config(($routeProvider : angular.route.IRouteProvider) => {
            $routeProvider.when('/', {
                templateUrl: 'templates/inventory.html',
                controller: 'InventoryController'
            });
        });

}