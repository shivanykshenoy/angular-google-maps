angular.module('app', ['google-maps'])
.controller('mainCtrl', function($scope){
  $scope.map = {
		center: { latitude: -54.77336558,	longitude: -68.203125	},
		zoom: 11,
		options: {
			disableDefaultUI: true,
			mapTypeId: google.maps.MapTypeId.SATELLITE
		}
	};

	$scope.marker = {
		id: 0,
		coords: {
			latitude: -54.77336558,
			longitude: -68.203125
		},
		options: {
			draggable: true
		},
		events: {
			dragend: function (marker, eventName, args,c) {
				console.log("c: " +c);
				console.log("args: " +args);
				console.log("eventname: " + eventName);
				console.log($scope.marker.coords);
			}
		}
	};
});
