(function() {
  function AlbumCtrl(Fixtures, SongPlayer, $stateParams) {
    this.albumData = Fixtures.getAlbum($stateParams.albumID);
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$stateParams', AlbumCtrl]);
})();
