const searchInput = document.getElementById('search-input');
const searchClearIcon = searchInput.nextElementSibling;


function toggleSortMenu(icon) {
    const menu = icon.nextElementSibling;
    const isVisible = menu.style.display === 'block';
    document.querySelectorAll('.sort-menu').forEach(m => m.style.display = 'none');

    if (!isVisible) {
        menu.style.display = 'block';
        const close = (e) => {
            if (!menu.contains(e.target) && e.target !== icon) {
                menu.style.display = 'none';
                document.removeEventListener('click', close);
            }
        };

        setTimeout(() => {
            document.addEventListener('click', close);
        }, 0);
    }
}

function clearInput(inputElement) {
    inputElement.value = '';
    inputElement.focus();
}

window.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll('.sort-menu').forEach(menu => {

        menu.style.display = 'none';

    });
});
searchClearIcon.addEventListener('click', () => {
    clearInput(searchInput);
})

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.sort-menu').forEach(menu => {
        menu.style.display = 'none';
    });

    const searchInput = document.getElementById('search-input');
    const searchClearButton = document.querySelector('.search-clear-btn');

    if (searchInput && searchClearButton) {
        searchClearButton.addEventListener('click', () => {
            clearInput(searchInput);
        });
    } else {
        if (!searchInput) console.warn("Search input with id 'search-input' not found.");
        if (!searchClearButton) console.warn("Search clear button with class 'search-clear-btn' not found.");
    }

    const modalOverlay = document.getElementById('cover-details-modal');

    if (modalOverlay) {
        const closeModalBtn = modalOverlay.querySelector('.modal-close-btn');
        const modalCoverId = document.getElementById('modal-cover-id');
        const modalCoverUserId = document.getElementById('modal-cover-user-id');
        const modalCoverImageUrl = document.getElementById('modal-cover-image-url');
        const modalCoverCreated = document.getElementById('modal-cover-created');
        const tableBody = document.querySelector('.styled-table tbody');

        const openUserDetailsModal = (tableRow) => {
            const id = tableRow.cells[1] ? tableRow.cells[1].textContent.trim() : 'N/A';
            const userId = tableRow.cells[2] ? tableRow.cells[2].textContent.trim() : 'N/A';
            const imageUrl = tableRow.cells[3] ? tableRow.cells[3].textContent.trim() : 'N/A';
            const created = tableRow.cells[4] ? tableRow.cells[4].textContent.trim() : 'N/A';


            modalCoverId.textContent = id;
            modalCoverUserId.textContent = userId;
            modalCoverImageUrl.textContent = imageUrl;
            modalCoverCreated.textContent = created;

            modalOverlay.style.display = 'flex';
        }
        const closeModal = () => {
            modalOverlay.style.display = 'none';
        }
        if (tableBody) {
            tableBody.addEventListener('click', (event) => {
                const coverCell = event.target.closest('.cover-cell');
                if (coverCell) {
                    const tableRow = coverCell.closest('tr');
                    if (tableRow) {
                        openUserDetailsModal(tableRow); // Открываем окно
                    }
                }
            });
        } else {
            console.warn("Table body '.styled-table tbody' not found for modal event listener.");
        }
        if (closeModalBtn) {
            closeModalBtn.addEventListener('click', closeModal);
        }

        modalOverlay.addEventListener('click', (event) => {
            if (event.target === modalOverlay) {
                closeModal();
            }
        });
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && modalOverlay.style.display === 'flex') {
                closeModal();
            }
        });
    } else {
        console.warn("Modal overlay element with id 'cover-details-modal' not found.");
    }

    document.querySelectorAll('.icon.edit').forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Вы изменили обложку');
        });
    });

    document.querySelectorAll('.icon.delete').forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Вы удалили обложку');
        });
    });
});