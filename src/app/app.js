require('angular');
require('angular-ui-router');
require('angular-aria');
require('angular-animate');
require('angular-messages');
require('mdPickers');
require('angular-material');
require('./components/home/home.js');
require('./components/about/about.js');
require('./components/result/result.js');
require('./components/menu/menu.js');
require('./components/restaurant/restaurant.js');

var app = angular.module('TakeAwaySaver', ['ui.router','ngMaterial','ngAnimate','ngAria','ngMessages','TakeAwaySaver.home','TakeAwaySaver.about','TakeAwaySaver.result','TakeAwaySaver.menu','TakeAwaySaver.restaurant']);

app.config(function($stateProvider, $urlRouterProvider,$locationProvider) {
	
	$stateProvider
	.state('home', {
		url: "/",
		views : {
			"" : {
				templateUrl:"app/components/home/home.html"
			},
			"footer@home":{
				templateUrl:"app/shared/footer/footer.html"
			}
		}
	})
	.state('about', {
		url: "/about",
		views : {
			"" : {
				templateUrl:"app/components/about/about.html"
			},
			"footer@about":{
				templateUrl:"app/shared/footer/footer.html"
			}
		}
	})
	.state('result', {
		url: "/result",
		views : {
			"" : {
				templateUrl:"app/components/result/result.html"
			},
			"footer@result":{
				templateUrl:"app/shared/footer/footer.html"
			}
		}
	})
	.state('menu', {
		url: "/menu",
		views : {
			"" : {
				templateUrl:"app/components/menu/menu.html"
			},
			"footer@menu":{
				templateUrl:"app/shared/footer/footer.html"
			}
		}
	})
	.state('restaurant', {
		url: "/restaurant",
		views : {
			"" : {
				templateUrl:"app/components/restaurant/restaurant.html"
			},
			"footer@restaurant":{
				templateUrl:"app/shared/footer/footer.html"
			}
		}
	});
	
	$locationProvider.hashPrefix('');/*
	$locationProvider.html5Mode(true);*/
	$urlRouterProvider.otherwise("/");
	
	
});