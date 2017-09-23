(function () {
  function SongPlayer($rootScope, Fixtures, $stateParams) {
    var SongPlayer = {};

    /**
    * @desc Private attribute - stores album data in the song player service
    */
    var currentAlbum = Fixtures.getAlbum($stateParams.albumID);

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
        stopSong(song);
      }

      currentBuzzObject = new buzz.sound(song.audioUrl, {
        formats: ['mp3'],
        preload: true
      });

      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
          SongPlayer.currentTime = currentBuzzObject.getTime();
        });
      });

      SongPlayer.currentSong = song;
      SongPlayer.currentAlbum = Fixtures.getAlbum($stateParams.albumID);
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
      currentBuzzObject.play()
      SongPlayer.currentVolume = currentBuzzObject.getVolume();
      song.playing = true;
    };

    /**
    * @function stopSong
    * @desc Private function. Stops currentBuzzObject if one is present, sets the playing boolean
    *       to null
    */
    var stopSong = function(song) {
      currentBuzzObject.stop();
      song.playing = null;
    }

    SongPlayer.currentSong = null;

    /**
    * @desc Current playback time (in seconds) of currently playing song
    * @type {number}
    */
    SongPlayer.currentTime = null;

    SongPlayer.currentVolume = null;

    /**
    * The block of public code below controls play, pause, next, and previous behavior
    */

    SongPlayer.play = function(song) {
      SongPlayer.currentAlbum = Fixtures.getAlbum($stateParams.albumID);
      currentAlbum = SongPlayer.currentAlbum;
      console.log(currentAlbum);
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

    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    };


    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      console.log(currentSongIndex);
      currentSongIndex--;
      console.log(currentSongIndex);
      stopSong(SongPlayer.currentSong);

      if(currentSongIndex < 0) {
        var song = currentAlbum.songs[currentAlbum.songs.length - 1];
        setSong(song);
        playSong(song);
      }
      else {
        var song = currentAlbum.songs[currentSongIndex];
        console.log(currentAlbum.title);
        console.log(song.title);
        setSong(song);
        playSong(song);
      }
    };

    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;
      stopSong(SongPlayer.currentSong)

      if(currentSongIndex > currentAlbum.songs.length - 1) {
        var song = currentAlbum.songs[0];
        setSong(song);
        playSong(song);
      }
      else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    SongPlayer.setCurrentTime = function(time) {
      if(currentBuzzObject) {
        currentBuzzObject.setTime(time);
      }
    }

    SongPlayer.setVolume = function(volume) {
      if(currentBuzzObject) {
        currentBuzzObject.setVolume(volume);
        SongPlayer.currentVolume = volume;
      }
    }

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope', 'Fixtures', '$stateParams', SongPlayer]);
})();
