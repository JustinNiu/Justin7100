// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
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
});

app.controller('SoundBoardCtrl', function ($scope, $window) {

  $scope.media = null;

  $scope.model = {
    showDelete: false,
    showMove: false,
    sounds: [
      {
        'title': 'moca',
        'note': 'moca',
        'file': 'mp3/defe.wav'
      },
      {
        'title': 'coo',
        'note': 'coo',
        'file': 'mp3/dob.wav'
      },
      {
        'title': 'horst',
        'note': 'horst',
        'file': 'mp3/han.wav'
      },
      {
        'title': 'oma',
        'note': 'oma',
        'file': 'mp3/hit.wav'
      },
      {
        'title': 'tair',
        'note': 'tair',
        'file': 'mp3/jug.wav'      },
      {
        'title': 'zish',
        'note': 'zish',
        'file': 'mp3/wah.wav'
      }

    ]
  };

  $scope.deleteSound = function ($index) {
    $scope.model.sounds.splice($index, 1);
  };

  $scope.moveSound = function (sound, fromIndex, toIndex) {
    $scope.model.sounds.splice(fromIndex, 1);
    $scope.model.sounds.splice(toIndex, 0 , sound);
  };

  $scope.play = function(sound){
    if ($scope.media) {
      $scope.media.pause();
    }

    if ($window.cordova){
        ionic.Platform.ready(function () {
        var src = sound.file;

        // if (ionic.Platform.is('android')) {
        //   src = '/android_asset/www' + src;
        // }

        $scope.media = new $window.Media(src);
        $scope.media.play();
      });
    }else{
      $scope.media = new Audio();
      $scope.media.src = sound.file;
      $scope.media.load();
      $scope.media.play();
    }



  }



});