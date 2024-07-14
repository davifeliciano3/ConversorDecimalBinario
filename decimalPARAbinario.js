document.getElementById('formulario').addEventListener('submit',function(event){
    event.preventDefault();
    const decimal = document.getElementById('numero').value;
    console.log(decimal);
    const resposta = document.getElementById('resposta');
    let numero = Number(decimal);
    const lista = [];
    var resto;
    while( numero >0){
        resto = numero%2;
        numero = Math.floor(numero/2);
        lista.push(resto);
    }
    lista.reverse();
    
    const binario = lista.join('') || '0';
    resposta.innerHTML = binario;


});






