'use strict';

angular.module('mapavotosApp')

    .factory('mapaFactory', function() {
        
        var mapafac = {};
        var votos=[
                    {
			"local":"l331015",
			"nome":"USF - UNIV. SÃO FRANCISCO",
			"latitude":"-22.8943386",
			"longitude":"-47.0502303",
			"n11567":"42",
			"n25000":"37",
			"n13001":"49",
			"n50100":"40",
			"n45678":"47",
			"n10123":"28",
			"n22000":"13",
			"n45222":"9",
			"n11111":"9",
			"n40678":"11",
			"n45234":"50",
			"n45200":"8",
			"n17200":"2",
			"n40000":"13",
			"n14123":"7",
			"n19019":"57",
			"n40345":"21",
			"n65656":"13",
			"n20500":"2",
			"n40222":"5",
			"n55190":"25",
			"n23123":"22",
			"n43123":"24",
			"n55055":"30",
			"n11900":"1",
			"n22012":"2",
			"n35000":"3",
			"n40456":"27",
			"n20220":"3",
			"n55888":"4",
			"n43043":"1",
			"n40230":"6",
			"n13613":"7"
		},
		{
			"local":"l331023",
			"nome":"COLEGIO PROGRESSO CAMPINEIRO",
			"latitude":"-22.8982556",
			"longitude":"-47.0557711",
			"n11567":"72",
			"n25000":"103",
			"n13001":"109",
			"n50100":"113",
			"n45678":"128",
			"n10123":"18",
			"n22000":"16",
			"n45222":"10",
			"n11111":"3",
			"n40678":"23",
			"n45234":"145",
			"n45200":"21",
			"n17200":"0",
			"n40000":"46",
			"n14123":"18",
			"n19019":"157",
			"n40345":"28",
			"n65656":"27",
			"n20500":"0",
			"n40222":"1",
			"n55190":"27",
			"n23123":"58",
			"n43123":"88",
			"n55055":"217",
			"n11900":"3",
			"n22012":"3",
			"n35000":"1",
			"n40456":"47",
			"n20220":"2",
			"n55888":"5",
			"n43043":"6",
			"n40230":"4",
			"n13613":"4"
		}
                 ];
    
        var vereadores=[
                        {
                          "nome":"Rafa Zimbaldi",
                          "numero":"11567"
                        },
                        {
                          "nome":"Campos Filho",
                          "numero":"25000"
                        },
                        {
                          "nome":"Pedro Tourinho","numero":"13001"},
                        {
                          "nome":"Mariana Conti","numero":"50100"},
                        {  
                          "nome":"Luiz Henrique Cirilo","numero":"45678"},
                        {
                          "nome":"Fernando Mendes","numero":"10123"},
                        {
                          "nome":"Professor Alberto","numero":"22000"},
                        {"nome":"Jorge da Farmacia","numero":"45222"},
                        {"nome":"Rodrigo Da Farmadic","numero":"11111"},
                        {"nome":"Ze Carlos","numero":"40678"},
                        {"nome":"Marcos Bernardelli","numero":"45234"},
                        {"nome":"Gilberto Vermelho","numero":"45200"},
                        {"nome":"Edison Ribeiro","numero":"17200"},
                        {"nome":"Vinicius Gratti","numero":"40000"},
                        {"nome":"Jorge Schneider","numero":"14123"},
                        {"nome":"Nelson Hossri","numero":"19019"},
                        {"nome":"Flores","numero":"40345"},
                        {"nome":"Gustavo Petta","numero":"65656"},
                        {"nome":"Rubens Gas","numero":"20500"},
                        {"nome":"Pastor Elias Azevedo","numero":"40222"},
                        {"nome":"Tenente Santini","numero":"55190"},
                        {"nome":"Andre Von Zuben","numero":"23123"},
                        {"nome":"Rossini","numero":"43123"},
                        {"nome":"Marcelo Silva","numero":"55055"},
                        {"nome":"Tico Costa","numero":"11900"},
                        {"nome":"Filipe Marchesi","numero":"22012"},
                        {"nome":"Aurelio","numero":"35000"},
                        {"nome":"Luis Yabiku","numero":"40456"},
                        {"nome":"Carmo Luiz","numero":"20220"},
                        {"nome":"Ailton Da Farmacia","numero":"55888"},
                        {"nome":"Perminio Monteiro","numero":"43043"},
                        {"nome":"Paulo Galterio","numero":"40230"},
                        {"nome":"Carlao do PT}","numero":"13613"}
            ];
    
        mapafac.getMapa = function(){
            return votos;
        };
        
        mapafac.getMapa1 = function(index){
            return votos[index];
        };
    
        mapafac.getVereadores = function(){
            return vereadores;
        };
        
        return mapafac;
    
});