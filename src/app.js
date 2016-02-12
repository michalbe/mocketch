'use strict';

require.config({
  paths: {
    jquery: '../node_modules/jquery/dist/jquery.min',
    underscore: '../node_modules/underscore/underscore-min',
    text: '../node_modules/requirejs-text/text',
    m: 'views/m'
  },

  urlArgs: 'bust=' + (new Date()).getTime()
});

require([
  'm',
  'views/main/main',
  'views/header/header',
  'views/drawing-desktop/drawing-desktop',
], function(M, MainView, HeaderView, DrawingDesktop) {
  var $ = M.$;

  MainView.render();
  HeaderView.render();

  var VIEWS = {
    'drawing-desktop': DrawingDesktop
  };

  $(document).on('render-view', function(evt, data) {
    if (data.view in VIEWS) {
      console.log('przeszło');
      VIEWS[data.view].render();
    }
  });
});
