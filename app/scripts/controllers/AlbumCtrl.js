(function() {
  function AlbumCtrl(Fixtures, SongPlayer, $state, $stateParams) {
    this.albumData = Fixtures.getAlbum($stateParams.albumID);
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', '$state', '$stateParams', AlbumCtrl]);
})();
