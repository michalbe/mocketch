'use strict';

define([
  'm',
  'text!./header.html'
], function(M, template) {

  var render = function() {
    var compiledTemplate = M._.template(template);

    M.header.html(compiledTemplate({
      appName: M.appName
    }));
  };

  return {
    render: render
  };
});
