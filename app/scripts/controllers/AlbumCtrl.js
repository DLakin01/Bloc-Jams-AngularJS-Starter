(function() {
  function AlbumCtrl() {
    this.albumData = albumBonIver;
    //this.albumData.songs
  }

  angular
    .module('blocJams')
    .controller('AlbumCtrl', [AlbumCtrl]);
})();
