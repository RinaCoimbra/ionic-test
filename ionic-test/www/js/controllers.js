angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope, $http) {
    $scope.fantasma = [
        {"nome":"Gengar", "tipo":"Assustador", "podeservisto": true},
        {"nome": "Gasparzinho", "tipo":"Camarada", "podeservisto": true},
        {"nome": "Poltergeist", "tipo":"Fenomeno", "podeservisto": false},
        {"nome": "Homem de Marshmallow", "tipo":"Gigante", "podeservisto":true}
        ];
        
    $scope.buscaAPI = function(busca2){
        // Simple GET request example:
        var apikey = "7c20378c-001e-4639-ab96-669be9f17f7f";
        var url = "https://na.api.pvp.net/api/lol/br/v1.4/summoner/by-name/"
        var nome = busca2;
        console.log(nome);
        var resto_da_url = "?api_key=";
        var url_get = url + nome + resto_da_url + apikey;
        $http.get(url_get).then(function successCallback(response) {
            console.log(response);
          }, function errorCallback(response) {
            alert(JSON.stringify(response));
          });
    };
})
   
.controller('cameraTabDefaultPageCtrl', function($scope) {
   // $scope.bleh = "bleeeeeeeeeeeeh";
    $scope.bleh = {"blih": "blaaaaaaaah"};
    $scope.animaisMarinhos = ["Baleia", "Golfinho", "Tubarão"];
    $scope.alertbleh = function(){
        alert("bleeeeeeh");
    }
})
   
.controller('cartTabDefaultPageCtrl', function($scope) {

})
   
.controller('cloudTabDefaultPageCtrl', function($scope) {

})
    