
const imc = []

for (i = 0; i < pacientes.length; i++) {
        imc.push(pacientes[i].children[1].textContent / (pacientes[i].children[2].textContent ** 2))
        pacientes[i].children[4].textContent = imc[i].toFixed(2)
}
function calculaImc(altura, peso) {
    if (peso > 300 || peso < 20) {
        return 'peso inválido!'
    } else if (altura < 0.50 || altura > 3) {
        return 'altura inválido!'
    } else {
        return (peso / (altura ** 2)).toFixed(2)
    }
}
function testeError(paciente,peso,altura){
    if (peso>300||peso<20){
        paciente[paciente.length-1][paciente.length-1].classList.add('erro');
    }else if(altura>3||altura<0.50){
        paciente[paciente.length-1][paciente.length-1].classList.add('erro');
    }
}
