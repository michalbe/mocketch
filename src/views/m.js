'use strict';

define([
  'jquery', 'underscore'
], function($, _) {

  return {
    container: $('#mocketch-content'),
    header: $('#mocketch-header'),
    appName: 'Mocketch.com',
    $: $,
    _: _
  };
});
