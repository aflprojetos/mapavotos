'use strict';

angular.module('mapavotosApp')

    .controller('MapaController', ['$scope', 'mapaFactory', function($scope, mapaFactory){
        
        $scope.message = "Mapa de Votos de Campinas";
        $scope.votos = mapaFactory.getMapa();
            
    }]);