document.querySelector('.mobile-menu-icon').addEventListener('click', function() {
    var dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
});