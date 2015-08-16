var app = angular.module('myApp', ['pouchdb']);
app.service('service', function(pouchDB) {
	var db = pouchDB('addressDB');
});
app.controller('mainController', function($log, $scope, pouchDB){
	var db = pouchDB('addressDB');
	$scope.save=function(){
		$user = $scope.user;
		var r = Math.floor((Math.random() * 1000) + 1);
		db.put({_id:$user.phoneNo, user:$user}).then(function(response) {
			$scope.saveMessage = 'Saved Successfully!';
			console.log(response);
		}).catch(function(error) {
			$scope.saveMessage = 'Error '.concat(error.message);
		}).finally(function() {

		});
	};
	$scope.search=function(){
		db.get($scope.searchPhoneNo).then(function (doc) {
			$scope.returnedUser = doc.user;			
		}).catch(function (err) {
			$scope.searchMessage = 'Error: '.concat(err.message);
		});
	};
});