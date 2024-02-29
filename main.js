function validarFormulario() {
    let campoA = document.getElementById('campoA').value;
    let campoB = document.getElementById('campoB').value;

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    if (campoB > campoA) {
        alert('Formulário válido! B é maior que A.');
    } else {
        alert('Formulário inválido! B deve ser maior que A.');
        event.preventDefault();
    }
}