// Assuming this script is in a separate file like 'dropdown.js'

const menuIcon = document.querySelector('.mobile-menu-icon');
const dropdownMenu = document.querySelector('.dropdown-menu');

// Toggle dropdown menu
menuIcon.addEventListener('click', function(event) {
  dropdownMenu.classList.toggle('show'); // Use 'show' to display the menu
  event.stopPropagation(); // Prevent click from immediately closing the menu
});

// Close dropdown menu when clicking outside
document.addEventListener('click', function(event) {
  // Check if the menu is currently shown
  if (dropdownMenu.classList.contains('show')) {
    const isClickInsideMenu = dropdownMenu.contains(event.target);
    const isClickOnMenuIcon = menuIcon.contains(event.target);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
      dropdownMenu.classList.remove('show'); // Use 'show' to hide the menu
    }
  }
});
