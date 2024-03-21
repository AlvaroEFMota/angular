angular.module('app') // Recupera o módulo 'app' existente
	.controller('MainController', function($scope) {

		// Código do controlador
		angular.module('app').controller('MainController', function($scope) {
			$scope.getNome = function(autenticacao) {
				if (autenticacao && autenticacao.clienteAtual) {
					return autenticacao.clienteAtual.primeiroNome + ' ' +  autenticacao.clienteAtual.ultimoNome;
				}
				return '';
			};
		});
	});
