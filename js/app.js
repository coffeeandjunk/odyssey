
(function(ns){
	'use strict';
	require.config({
		baseUrl: './js/',
		paths:{
			'jquery' : 'vendor/jquery.min',
			'leap' : 'vendor/leap-0.6.3.min',
			'vendor/jquery.scrollto' : 'vendor/jquery.scrollTo-1.4.2-min',
			'three' : 'vendor/three.min',
			'_' : 'vendor/underscore-min',
			'ui' : 'vendor/jquery-ui-1.10.3.custom.min',
			'three/controls/OrbitControls' : 'vendor/three/controls/OrbitControls',
			'three/controls/TrackballControls' : 'vendor/three/controls/TrackballControls',
			'three/controls/LeapTrackballControls' : 'vendor/three/controls/LeapTrackballControls',
			'three/controls/LeapControls' : 'vendor/three/controls/LeapControls',
			'three/stats' : 'vendor/three/stats.min',
			'three/RingGeometry2' : 'vendor/three/RingGeometry2',
			'prefixfree' : 'vendor/prefixfree.min'
		},
		shim: {
			'three': {
				deps: []
			},
			'jquery': {
				deps: []
			},
			'ui': {
				deps: ['jquery']
			},
			'vendor/jquery.autosize': {
				deps: ['jquery']
			},
			'vendor/jquery.scrollto': {
				deps: ['jquery']
			},
			'vendor/jquery.xdomainajax': {
				deps: ['jquery']
			},
			'three/controls/OrbitControls' : {
				deps: ['three']
			},
			'three/controls/TrackballControls' : {
				deps: ['three']
			},
			'three/RingGeometry2' : {
				deps: ['three']
			},
			'three/controls/LeapControls' : {
				deps: ['leap', 'three']
			}
		}
	});
		
	require([
		'jquery',
		'odyssey/Main'
	], function($, odyssey){
		$(function(){

			if(!window.WebGLRenderingContext){
				var msgCont = $('#preload').find('.title');
				msgCont.append('<h3>Your browser does not support WebGL. Please visit <a href="http://get.webgl.org/">webgl.org</a></h3>');
				return;
			}

			ns.app = odyssey.init();
		});
	});
	
})(window.odyssey = window.odyssey || {});