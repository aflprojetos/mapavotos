'use strict';

angular.module('mapavotosApp')

    .controller('MapaController', ['$scope', 'mapaFactory', function($scope, mapaFactory){
        
        var mymap = L.map('mapid').setView([-22.905556, -47.060833], 12);
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
        // *** vereador que será selecionado.
        $scope.verSelected = "";
        $scope.latitude = -22.905556;
        $scope.longitude = -22.905556;
        $scope.raio = 0;
        
        $scope.selVereador = function(){  
            /*$scope.latitude = $scope.latitude + 0.000003;
            var circle = L.circle([$scope.latitude, -47.060833], 500, {
    		color: 'red',
    		fillColor: '#f03',
    		fillOpacity: 0.5
			}).addTo(mymap);    */
            
            var i = 0;   
            var marker;
            var circle;
            for(i=0; i<$scope.votos.length; i++){
                console.log($scope.votos[i].local);
                $scope.latitude = parseFloat($scope.votos[i].latitude);
                $scope.longitude = parseFloat($scope.votos[i].longitude);
                //marker = L.marker([$scope.latitude, $scope.longitude]).addTo(mymap);
            
                //$scope.raio = eval("$scope.votos["+i.toString()+"].$scope." + $scope.verSelected.toString());
                
                    
                $scope.raio = eval("$scope.votos["+i+"]"+".n"+$scope.verSelected);
                $scope.raio = $scope.raio * 3;
                console.log($scope.raio);
                
                
                circle = L.circle([$scope.latitude, $scope.longitude], $scope.raio, {
    		      color: 'red',
    		      fillColor: '#f03',
    		      fillOpacity: 0.5
			     }).addTo(mymap);
                
            }
                

            
        };
        
        
        
        
        
        
        
        
        
            
    }]);