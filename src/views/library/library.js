'use strict';

define([
  'm',
  'text!./library.html'
], function(M, template) {

  var renderTo = function(container) {
    var _ = M._;

    var files = [
      {
        name: 'First Screen',
        src: '../temp_images/1.png'
      },
      {
        name: 'Second Screen',
        src: '../temp_images/2.png'
      },
      {
        name: 'Third Screen',
        src: '../temp_images/3.png'
      }
    ];
    var compiledTemplate = _.template(template);

    container.html(compiledTemplate({
      files: files
    }));
  };

  return {
    renderTo: renderTo
  };
});
