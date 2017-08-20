angular
.module('ngCribs')
.controller('scriptsController', function($scope, scriptsFactory){
	$scope.array;

	$scope.priceInfo = {
		min: 0,
		max: 1000000
	};

	$scope.newListing = {};

	$scope.addElement = function(newListing){
		newListing.image = 'default-crib';
		$scope.array.push(newListing);
		$scope.newListing = {};
	};

	$scope.editElement = function(element){
		$scope.editListing = true;
		$scope.existingListing = element;
	};

	$scope.saveEdit = function(){
		$scope.editListing = false;
		$scope.existingListing = {};
	};

	$scope.deleteElement = function(element){
		var index = $scope.array.indexOf(element);
		$scope.array.splice(index, 1);
		$scope.editListing = false;
		$scope.existingListing = {};
	};

	scriptsFactory.getData().then(function(response){
		$scope.array = response.data;
	}, function(error){
		console.log(error);
	});

});