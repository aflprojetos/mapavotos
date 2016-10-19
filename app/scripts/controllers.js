'use strict';

angular.module('mapavotosApp')

    .controller('MapaController', ['$scope', 'mapaFactory', function($scope, mapaFactory){
        
        var mymap = L.map('mapid').setView([-22.905556, -47.060833], 13);
        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
            maxZoom: 20,
            attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
                '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                'Imagery © <a href="http://mapbox.com">Mapbox</a>',
            id: 'mapbox.streets'
        }).addTo(mymap); 
        
        $scope.message = "Mapa de Votos de Campinas";
        $scope.votos = mapaFactory.getMapa();
        
        $scope.vereadores = mapaFactory.getVereadores();
        
        $scope.selVereador = function(numero){
            var circle = L.circle([-22.85, -47.22], 500, {
    		color: 'red',
    		fillColor: '#f03',
    		fillOpacity: 0.5
			}).addTo(mymap);
            
            alert(numero)
        }
            
    }]);