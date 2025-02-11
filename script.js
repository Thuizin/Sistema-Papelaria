document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    
    dropdowns.forEach(function(dropdown) {
      dropdown.addEventListener('click', function(event) {
        event.stopPropagation();
        closeAllDropdowns();
        var content = dropdown.querySelector('.dropdown-content');
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });
    });
  
    document.addEventListener('click', function() {
      closeAllDropdowns();
    });
  
    function closeAllDropdowns() {
      dropdowns.forEach(function(dropdown) {
        var content = dropdown.querySelector('.dropdown-content');
        content.style.display = 'none';
      });
    }
  });