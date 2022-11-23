let botao = document.querySelector('#adicionar-paciente');
let pacientes = document.querySelectorAll('.paciente');
var pacienteNovo = [];
var listaErros = document.querySelector('.lista-erros');

function obtemPaciente(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(altura.value, peso.value)
    }
    return paciente
}
function validaDados(paciente) {

    if (paciente.nome.length < 3) {
        listaErros.appendChild(erroPeso = document.createElement('li'))
        listaErros.classList.add('erro');
        erroPeso.textContent = 'insira um nome válido';
    }

    if (paciente.peso > 300 || paciente.peso < 00) {
        listaErros.appendChild(erroPeso = document.createElement('li'));
        listaErros.classList.add('erro');
        erroPeso.textContent = 'peso invalido!';
    }
    if (paciente.altura > 3 || paciente.altura < .5) {
        listaErros.appendChild(erroPeso = document.createElement('li'));
        listaErros.classList.add('erro');
        erroPeso.textContent = 'altura invalido!';
    }
    if (paciente.gordura <= 2 || paciente.gordura > 100 || paciente.gordura < 0) {
        listaErros.appendChild(erroPeso = document.createElement('li'));
        listaErros.classList.add('erro');
        erroPeso.textContent = 'percentual de gordura  invalido!';
    }

}
function criaTable(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente')

    pacienteTr.appendChild(criaTd(paciente.nome, 'info-nome'))
    pacienteTr.appendChild(criaTd(paciente.peso, 'info-peso'))
    pacienteTr.appendChild(criaTd(paciente.altura, 'info-altura'))
    pacienteTr.appendChild(criaTd(paciente.gordura, 'info-gordura'))
    pacienteTr.appendChild(criaTd(paciente.imc, 'info-imc'))

    tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
}
function criaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)
    return td
}
botao.addEventListener("click", function (event) {
    event.preventDefault();
    formAdiciona = document.querySelector('#form-adiciona')
    listaErros.innerHTML = ''
    const paciente = obtemPaciente(formAdiciona);
    validaDados(paciente);
    if (listaErros.children.length == 0) {
        criaTable(paciente);
    }
    pacientes = document.querySelectorAll('.paciente');
    document.querySelector('#form-adiciona').reset()
})