let elBtnLimpar = document.getElementById('btn-limpar');

let limparValorElemento = (id) => {
    let elName = document.getElementById(id);
    elName.value = '';
}

let limparCheckBoxes = (id) => {
    let checkBoxes = document.getElementsByClassName(id);
    for (let i = 0; i < checkBoxes.length; i++) {
        checkBoxes[i].checked = false;
    }
}

elBtnLimpar.addEventListener('click', () => {
    let listaIds = [
        "nome",
        "rg",
        "cpf",
        "data"
    ];
    listaIds.forEach(id => limparValorElemento(id));
    limparCheckBoxes("checkbox-round");
});