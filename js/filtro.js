var campoFiltro = document.querySelector('#filtrar-tabela');

console.log(campoFiltro);

campoFiltro.addEventListener('input', function () {
    console.log(this.value);

    if (this.value.length > 0) {
        for (var i = 0; i < pacientes.length; i++) {
var expressao = new RegExp(this.value,'i');
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector('.info-nome');
            var nome = tdNome.textContent;
            console.log(nome);

            if (!expressao.test(nome) ){

                paciente.classList.add('fadeOut');
                paciente.classList.add('invisivel');
            } else {
                paciente.classList.remove('fadeOut');
                paciente.classList.remove('invisivel');
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove('fadeOut');
            paciente.classList.remove('invisivel');
        }
    }

})