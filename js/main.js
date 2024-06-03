document.addEventListener('DOMContentLoaded', function() {
  var galleryItems = document.querySelectorAll('.gallery-item');
  var modalImage = document.getElementById('modal-image');

  galleryItems.forEach(function(item) {
  item.addEventListener('click', function() {
    var src = item.getAttribute('src');
    modalImage.setAttribute('src', src);
  });
  });
});