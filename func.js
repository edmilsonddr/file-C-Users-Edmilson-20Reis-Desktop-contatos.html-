var uid = 0;

function ContatoController($scope) {

$scope.contatos = [ ];

$scope.salvaContato = function() {

if($scope.novocontato.id == null) {
//novo contato
$scope.novocontato.id = uid++;
$scope.contatos.push($scope.novocontato);
} 
//atualiza um contato existente
else {
for(i in $scope.contatos) {
if($scope.contatos[i].id == $scope.novocontato.id) {
$scope.contatos[i] = $scope.novocontato;
}
} 
}
$scope.novocontato = {};//limpa o formulário
}

$scope.deleta = function(id) {

//procurar um contato com o id informado e deleta
for(i in $scope.contatos) {
if($scope.contatos[i].id == id) {
$scope.contatos.splice(i,1);
$scope.novocontato = {};
}
}
}