/*function executar() {
    let valor = document.getElementById("campo").value;
    // processar...
    document.getElementById("saida").innerHTML = resultado;
}*/

function solucao(n) {
    let vetor = [];

    n = parseInt(document.getElementById("nText"));

    for(i=1; i<= n; i++){
        vetor.push(i);
    }

    for(i=0; i<n; i++){
        if(vetor[i] % 3 == 0 && vetor[i] % 5 == 0){
            vetor[i] = "FizzBuzz";
        }
        else if(vetor[i] % 3 == 0){
           vetor[i] = "Fizz"; 
        } 
        else if(vetor[i] % 5 == 0){
            vetor[i] = "Buzz";
        } 
        else if(vetor[i] % 7 == 0){
            vetor[i] = "Boom";
        } 
    }

    alert(vetor);
}