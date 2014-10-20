

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {

		
		var system =  {
			name : 'SaturnMoon',
			commonBodies : ['saturn', 'titan'],
			secondsPerTick : 3600,
		};


		return system;
		
	}
);