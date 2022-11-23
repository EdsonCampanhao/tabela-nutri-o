var botaoAdicionarPaciente = document.querySelector('#buscar-pacientes')
var paciente = []
console.log(botaoAdicionarPaciente)

botaoAdicionarPaciente.addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {

        if (xhr.status == 200) {
            resposta = xhr.responseText
            paciente = JSON.parse(resposta)
            paciente.forEach(function (element, index) {
                console.log('alo')
                criaTable(paciente[index]);
            })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText)
        }

    })
    xhr.send();
}
)
