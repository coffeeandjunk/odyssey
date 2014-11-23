

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {
		
		var system =  {
			name : 'EarthMoon',
			title : 'चंद्र चरण',
			commonBodies : ['earth', 'moon'],
			secondsPerTick : {min: 3600/2, max: 3600 * 5, initial:3600},
						defaultGuiSettings : { 
				planetScale : 100
			},
			help : "इसमें सिर्फ पृथ्वी तथा चन्द्रमा शामिल हैं चन्द्र चरण का अध्ययन करने के लिए।"
		};

		return system;
		
	}
);