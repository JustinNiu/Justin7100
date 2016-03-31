// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


// app.controller('JustinProject',function($scope){

//   var pong = new Howl({urls: ['http://www.javascriptoo.com/application/html/pong.wav']})
//   document.getElementById('btn').onclick=function(){pong.play()}

//   var pong3 = new Howl({
//   urls: ["mp3/oboe.wav"],
//   sprite: {
//     blast: [0, 2000],
//     laser: [300, 7000],
//     winn: [5000, 100]
//     }
//   });

//   document.getElementById('btn3').onclick=function(){pong3.play('winn')}
// }


//   var pong2 = new Howl({
//     // urls: ['http://www.javascriptoo.com/application/html/kingsolomonhill-TimesHasDoneGotHard-short.mp3'],
//   urls:["mp3/oboe.wav"],
//   loop: true,
//   volume: 0.5,
//   onend: function() {
//     alert('Finished!');
//   }
// });
//   document.getElementById('btn2').onclick=function(){pong2.play()};

//     // document.getElementById('btn21').onclick=function(){
//     //   pong2.pause().fadeIn(0.5, 2000);
//     // });

  // )



