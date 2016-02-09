'use strict';

/* globals $, _ */

$(function(){
  var appName = 'Mocketch.com';
  var mainContainer = $('#mocketch-content');
  $.get('templates/main.html').then(function(data) {
    console.log(_.template(data)({appName: appName}));
    mainContainer.html(_.template(data)({appName: appName}));
  });
});
