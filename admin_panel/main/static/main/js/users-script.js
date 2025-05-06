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

    const modalOverlay = document.getElementById('user-details-modal');

    if (modalOverlay) {
        // const modalContent = modalOverlay.querySelector('.modal-content');
        const closeModalBtn = modalOverlay.querySelector('.modal-close-btn');
        const modalTitle = document.getElementById('modal-title');
        const modalUserId = document.getElementById('modal-user-id');
        const modalUserEmail = document.getElementById('modal-user-email');
        const modalUserUsername = document.getElementById('modal-user-username');
        const modalUserHash = document.getElementById('modal-user-hash');
        const modalUserCreated = document.getElementById('modal-user-created');

        const tableBody = document.querySelector('.styled-table tbody');

        const openUserDetailsModal = (tableRow) => {
            const id = tableRow.cells[1] ? tableRow.cells[1].textContent.trim() : 'N/A';
            const username = tableRow.cells[2] ? tableRow.cells[2].textContent.trim() : 'N/A';
            const email = tableRow.cells[3] ? tableRow.cells[3].textContent.trim() : 'N/A';
            const created = tableRow.cells[4] ? tableRow.cells[4].textContent.trim() : 'N/A';
            const hash = '**********';

            modalTitle.textContent = `Пользователь: ${username}`;
            modalUserId.textContent = id;
            modalUserEmail.textContent = email;
            modalUserUsername.textContent = username;
            modalUserHash.textContent = hash;
            modalUserCreated.textContent = created;

            modalOverlay.style.display = 'flex';
        }
        const closeModal = () => {
            modalOverlay.style.display = 'none';
        }
        if (tableBody) {
            tableBody.addEventListener('click', (event) => {
                const userCell = event.target.closest('.user-cell');
                if (userCell) {
                    const tableRow = userCell.closest('tr');
                    if (tableRow) {
                        openUserDetailsModal(tableRow);
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
        console.warn("Modal overlay element with id 'user-details-modal' not found.");
    }

    document.querySelectorAll('.icon.edit').forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Вы изменили пользователя');
        });
    });

    document.querySelectorAll('.icon.delete').forEach(icon => {
        icon.addEventListener('click', () => {
            alert('Вы удалили пользователя');
        });
    });
});