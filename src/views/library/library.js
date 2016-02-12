'use strict';

define([
  'm',
  'text!./library.html'
], function(M, template) {

  var render = function() {
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
    var compiledTemplate = M._.template(template);

    M.container.html(compiledTemplate({
      files: files
    }));
  };

  return {
    render: render
  };
});
