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
  'views/main/main',
  'views/header/header',
], function(MainView, HeaderView) {

  MainView.init();
  HeaderView.init();
  
});
