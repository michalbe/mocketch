'use strict';

define([
  'm',
  'text!./header.html'
], function(M, template) {

  var init = function() {
    var compiledTemplate = M._.template(template);

    M.header.html(compiledTemplate({
      appName: M.appName
    }));
  };

  return {
    init: init
  };
});
