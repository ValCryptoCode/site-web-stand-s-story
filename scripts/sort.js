document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn button');
    const items = document.querySelectorAll('.gallerie a');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe 'selected' de tous les boutons
            buttons.forEach(btn => btn.classList.remove('selected'));
            // Ajouter la classe 'selected' au bouton cliqué
            this.classList.add('selected');

            const filter = this.id;

            items.forEach(item => {
                const size = parseInt(item.getAttribute('data-size'));

                if (filter === 'sortAll') {
                    item.style.display = 'block';
                } else if (filter === 'sortSmall' && size < 50) {
                    item.style.display = 'block';
                } else if (filter === 'sortMedium' && size >= 50 && size <= 100) {
                    item.style.display = 'block';
                } else if (filter === 'sortLarge' && size > 100) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
