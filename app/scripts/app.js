(function() {
  function config($stateProvider, $locationProvider) {
    $locationProvider
      .html5Mode({
        enabled: true,
        requireBase: true
      });

    $stateProvider
      .state('landing', {
        url: '/',
        controller: 'LandingCtrl as landing',
        templateUrl: '/templates/landing.html',
        css: 'styles/landing.css'
      })
      .state('album', {
        url: '/album',
        controller: 'AlbumCtrl as album',
        templateUrl: '/templates/album.html',
        css: ['styles/album.css', 'styles/player_bar.css']
      })
      .state('collection', {
        url: '/collection',
        controller: 'CollectionCtrl as collection',
        templateUrl: '/templates/collection.html',
        css: 'styles/collection.css'
      });
  }
  angular
    .module('blocJams', ['ui.router', 'angularCSS'])
    .config(config);
})();
