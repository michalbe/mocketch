'use strict';

define([
  'm',
  'text!./library.html'
], function(M, template) {

  var renderTo = function(container) {
    var _ = M._;
    var $ = M.$;

    var files = [
      {
        id: Math.round(Math.random()*0xFFFFFF).toString(16).toUpperCase(),
        name: 'First Screen',
        src: '../temp_images/1.png'
      },
      {
        id: Math.round(Math.random()*0xFFFFFF).toString(16).toUpperCase(),
        name: 'Second Screen',
        src: '../temp_images/2.png'
      },
      {
        id: Math.round(Math.random()*0xFFFFFF).toString(16).toUpperCase(),
        name: 'Third Screen',
        src: '../temp_images/3.png'
      }
    ];
    var compiledTemplate = _.template(template);

    container.html(compiledTemplate({
      files: files
    }));

    $('[data-id]').on('click', function(evt) {
      var id = !!evt.target.dataset.id ?
        evt.target.dataset.id :
        $(evt.target).closest('[data-id]').attr('data-id');
      console.log(id);
    });
  };

  return {
    renderTo: renderTo
  };
});
