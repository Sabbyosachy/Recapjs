const Addtolocal = () => {
    const Idinput = document.getElementById('StorageId');
    const ID = Idinput.value;

    const storageValue = document.getElementById('storageValue');
    const value = storageValue.value;

    localStorage.setItem(ID, value);
    Idinput.value = '';
    storageValue.value = '';
}

const pen = { color: 'rewd', price: 10 }
localStorage.setItem('pen', JSON.stringify(pen));