/** 

mass : kg
dist : km
apeed : km/s
radius: km

*/

define(
  [
    'odyssey/NameSpace',
    'odyssey/scenario/CommonCelestialBodies'
  ], 
  function(ns, common) {

    var cnf = {
      name : 'ScaledDistance',
      title : 'Planets scaled 3000 times with relative distance',
      commonBodies : [
        'sun',
        'mercury',
        'venus',
        'earth',
        'mars',
        'jupiter',
        'saturn',
        'uranus',
        'neptune',
        'pluto'
      ],
      
      bodies:{
        sun : {
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius : 6.96342e5 * 3000
        },
        mercury:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 2439 * 3000,
          orbit : {
          base : {a : 0.38709927 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0.00000037 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        venus:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 6051 * 3000,
          orbit : {
          base : {a : 0.72333566 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0.00000390 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        earth:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 3443.9307 * ns.NM_TO_KM * 3000,
          orbit : {
          base : {a : 1.00000261 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0.00000562 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        mars:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 3376 * 3000,
          orbit : {
          base : {a : 1.52371034 * 10 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        jupiter:{
          mass: 5.6846e26,
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 71492 * 3000,
          orbit : {
          base : {a : 40 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        saturn:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 58232 * 3000,
          ring : {
          innerRadius : 74500 * 3000,
          outerRadius : 117580 * 3000,
          map : 'img/saturnrings.png'
          },
          orbit : {
          base : {a : 45 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        uranus:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 25559 * 3000,
          orbit : {
          base : {a : 50 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        neptune:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          radius: 24764 * 3000,
          orbit : {
          base : {a : 55 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          }
        },
        pluto:{
          forceTrace: true,
          traceRelativeTo : 'universe',
          orbit : {
          base : {a : 60 * ns.AU ,  e : 0, i: 0, l : 0, lp : 0, o : 0},
          cy : {a : 0 * ns.AU ,  e : 0, i: 0, l : 10, lp : 0, o : 0}
          },
          radius: 1153 * 3000
        }
      },/**/
      secondsPerTick : {min: 3600, max: 3600 * 15, initial:3600 * 5},
      calculaionsPerTick : 100,
      usePhysics: true,
      calculateAll : false,
      useBarycenter : false,
      defaultGuiSettings : { 
        planetScale : 1
      },
      help : "Scaled version of the planets"
    };

    return cnf;
    
  }
);