'use strict';

define([
  'm',
  'text!./main.html'
], function(M, template) {

  var init = function() {
    var compiledTemplate = M._.template(template);

    M.container.html(compiledTemplate({
      appName: M.appName
    }));
  };

  return {
    init: init
  };
});
