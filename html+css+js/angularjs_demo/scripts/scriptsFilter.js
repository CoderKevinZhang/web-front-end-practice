angular
	.module('ngCribs')
	.filter('scriptsFilter', function() {

		return function(listings, priceInfo){

			var arrayList = [];

			var min = priceInfo.min;
			var max = priceInfo.max;

			angular.forEach(listings, function(listing) {

				if(listing.price >= min && listing.price <= max){

					arrayList.push(listing);
				}
			});

			return arrayList;
		}
	});