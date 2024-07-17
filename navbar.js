const toggleBtn = document.querySelector('.toggle-btn-menu');
const toggleBtnIcon = document.querySelector('.toggle-btn-menu i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function() {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark fa-2xl'
        : 'fa-solid fa-bars fa-2xl'
}