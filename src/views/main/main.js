'use strict';

define([
  'm',
  'text!./main.html'
], function(M, template) {

  var render = function() {
    var $ = M.$;
    var _ = M._;

    var compiledTemplate = _.template(template);

    // This unbinds attached listeners
    M.container.empty();
    M.container.html(compiledTemplate({
      appName: M.appName
    }));

    $('.get-started-button').on('click', function() {
      console.log('wyszlo');
      $(document).trigger('render-view', {view: 'drawing-desktop'});
    });
  };

  return {
    render: render
  };
});
