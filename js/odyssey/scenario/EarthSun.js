

define(
	[
		'odyssey/NameSpace',
		'odyssey/scenario/CommonCelestialBodies'
	], 
	function(ns, common) {
		
		var system =  {
			name : 'EarthSun',
			title : 'पृथ्वी के मौसम',
			commonBodies : ['earth', 'sun'],
			bodies:{
				earth:{
					map : 'img/earthmap1k_KSC.jpg'
				}
			},
			secondsPerTick : {min: 3600, max: 3600 * 15, initial:3600 * 5},//3600 * 24 * 2,
			//secondsPerTick : {min: 3600/2, max: 3600 * 5, initial:3600},
			defaultGuiSettings : { 
				planetScale : 1
			},
			help : "इसमें सिर्फ पृथ्वी तथा सूर्य शामिल  हैं पृथ्वी के मौसम का अध्ययन करने के लिए।"
		};

		return system;
		
	}
);