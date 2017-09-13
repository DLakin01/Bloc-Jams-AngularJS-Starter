(function () {
  function SongPlayer(Fixtures) {
    var SongPlayer = {};

    /**
    * @desc Private attribute - stores album data in the song player service
    */
    var currentAlbum = Fixtures.getAlbum();

    /**
    * @desc Buzz object audio file
    */
    var currentBuzzObject = null;

    /**
    * @function SetSong
    * @desc Private function. Stops currently playing song and loads new audio file as
    *       currentBuzzObject
    */
    var setSong = function(song) {
      if(currentBuzzObject) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });
      SongPlayer.currentSong = song;
    };

    /**
    * @function getSongIndex
    * @desc get index of clicked song from Fixtures
    */
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    }



    /**
    * @function playSong
    * @desc Private function. Plays currentBuzzObject returned by setSong, sets the playing boolean
    *       to true
    */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    };

    /**
    * @method SongPlayer.play
    * @desc Public method. Checks if the clicked song is the same as the stored value of SongPlayer.currentSong
    *       If not, calls setSong and playSong to play a new audio file. If so, plays
    *       paused song.
    */

    SongPlayer.currentSong = null;

    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if(SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      }
      else if(SongPlayer.currentSong === song) {
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
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };

    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if(currentSongIndex < 0) {
        var song = currentAlbum.songs[currentAlbum.songs.length - 1];
        setSong(song);
        playSong(song);
      }
      else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    }

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['Fixtures', SongPlayer]);
})();
