'use strict';

angular.module('mapavotosApp')

    .factory('mapaFactory', function() {
        
        var mapafac = {};
        var votos=[
                    {
                        "local":"l331015",
                        "nome":"USF - UNIV. SÃO FRANCISCO",
                        "latitude":"-22.9099038",
                        "longitude":"-47.0521561",
                        "11567":"42",
                        "25000":"37",
                        "13001":"49",
                        "50100":"40"
		            },
		            {
                        "local":"l331023",
                        "nome":"COLEGIO PROGRESSO CAMPINEIRO",
                        "latitude":"-22.9099038",
                        "longitude":"-47.0521561",
                        "11567":"72",
                        "25000":"103",
                        "13001":"109",
                        "50100":"113"			
		                }
                 ];
    
        mapafac.getMapa = function(){
            return votos;
        };
        
        mapafac.getMapa1 = function(index){
            return votos[index];
        };
        
        return mapafac;
    
});