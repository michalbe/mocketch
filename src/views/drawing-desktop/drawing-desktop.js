'use strict';

define([
  'm',
  'text!./drawing-desktop.html',

  'views/library/library',

], function(M, template, LibraryView) {

  var render = function() {
    var $ = M.$;
    var _ = M._;

    var compiledTemplate = _.template(template);

    M.container.empty();
    M.container.html(compiledTemplate());

    LibraryView.renderTo($('.library-container'));
  };

  return {
    render: render
  };
});
