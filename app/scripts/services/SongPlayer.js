(function () {
  function SongPlayer() {
    var SongPlayer = {};

    var currentSong = null;

    /**
    * @desc Buzz object audio file
    *
    */
    var currentBuzzObject = null;

    /**
    * @function SetSong
    * @desc Private function. Stops currently playing song and loads new audio file as
    *       currentBuzzObject
    *
    */
    var setSong = function(song) {
      if(currentBuzzObject) {
        currentBuzzObject.stop();
        currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentSong = song;
    };

    /**
    * @function playSong
    * @desc Private function. Plays currentBuzzObject returned by setSong, sets the playing boolean
    *       to true
    *
    */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };

    /**
    * @method SongPlayer.play
    * @desc Public method. Checks if the clicked song is the same as the stored value of currentSong
    *       If not, calls setSong and playSong to play a new audio file. If so, plays
    *       paused song.
    *
    */
    SongPlayer.play = function(song) {
      if(currentSong !== song) {
        setSong(song);
        playSong(song);
      }
      else if(currentSong === song) {
        if(currentBuzzObject.isPaused()) {
          playSong(song);
        }
      }
    };

    /**
    * @method SongPlayer.pause
    * @desc Public method. Pauses the currentBuzzObject and sets the playing boolean to false
    */
    SongPlayer.pause = function(song) {
      currentBuzzObject.pause();
      song.playing = false;
    };

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', SongPlayer);
})();
