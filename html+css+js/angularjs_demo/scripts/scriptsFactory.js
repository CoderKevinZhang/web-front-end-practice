angular
	.module('ngCribs')
	.factory('scriptsFactory', function($http){


		function getData(){
			return $http.get('data/data.json');
		}

		return {
			getData: getData
		}
	});