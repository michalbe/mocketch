'use strict';

define([
  'jquery', 'underscore'
], function($, _) {

  return {
    container: $('#mocketch-content'),
    appName: 'Mocketch',
    $: $,
    _: _
  };
});
