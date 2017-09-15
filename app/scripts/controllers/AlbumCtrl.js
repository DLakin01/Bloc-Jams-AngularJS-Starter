(function() {
  function AlbumCtrl(Fixtures, SongPlayer, $location) {
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$location', AlbumCtrl]);
})();
