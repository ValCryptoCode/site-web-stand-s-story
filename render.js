const toggleButton = document.getElementById('toggle');
const renderDiv = document.querySelector('.render');

toggleButton.addEventListener('change', () => {
    if (toggleButton.checked) {
        renderDiv.classList.add('alternate');
    } else {
        renderDiv.classList.remove('alternate');
    }
});