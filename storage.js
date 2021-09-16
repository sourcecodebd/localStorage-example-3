const message = document.getElementById('message');
const setLocal = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // set to localStorage
    if (!id && !value) {
        message.textContent = '';
        message.classList.add('emptyId');
        const empty = document.createElement('div');
        setTimeout(() => {
            message.classList.remove('emptyId');
            empty.innerHTML =
                ``
        }, 3000);
        empty.innerHTML =
            `Empty Input!`
        message.appendChild(empty);
    }
    else {
        const modified = document.createElement('div');
        const success = document.createElement('div');
        for (var key in localStorage) {
            console.log(key, id);
            if (key === id) {
                message.classList.add('modifiedId');
                success.style.display = 'none';
                setTimeout(() => {
                    message.classList.remove('modifiedId');
                    modified.innerHTML =
                        ``
                }, 3000);
                modified.innerHTML =
                    `Input updated!`
                message.appendChild(modified);
            }
            else {
                message.classList.add('successId');
                setTimeout(() => {
                    message.classList.remove('successId');
                    success.innerHTML =
                        ``
                }, 3000);
                success.innerHTML =
                    `Input added successfully!`
                message.appendChild(success);
            }
        }
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
};

const clearLocal = () => {
    localStorage.clear();
}