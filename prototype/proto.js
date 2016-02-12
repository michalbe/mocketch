'use strict';

$(function() {
  var desktop = $('.desktop');

  $('.library-element').click(function(evt) {
    var id = !!evt.target.dataset.id ?
      evt.target.dataset.id :
      $(evt.target).closest('[data-id]').attr('data-id');
    desktop.empty();

    var dImage = $('<img></img>');
    dImage
      .addClass('desktop-image')
      .attr('src', '../temp_images/' + id + '.png')
      .appendTo(desktop);
  });
});
