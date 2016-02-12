'use strict';

$(function() {
  $('.library-element').click(function(evt) {
    var id = !!evt.target.dataset.id ?
      evt.target.dataset.id :
      $(evt.target).closest('[data-id]').attr('data-id');
    
  });
});
