(function () {
   'use strict';
}());

/**
 * @ngInject
 */
function Routes($stateProvider, $locationProvider, $urlRouterProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
	.state('Home', {
		url: '/',
		controller: 'HomeCtrl as home',
		templateUrl: 'home.html',
		title: 'Home'
	});

	$urlRouterProvider.otherwise('/');

}

module.exports = Routes;