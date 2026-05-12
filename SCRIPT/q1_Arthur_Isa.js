function solucao() {
    let vetor = [];

    let n = parseInt(document.getElementById("nText").value);

    for (i = 1; i <= n; i++) {
        vetor.push(i);
    }

    for (i = 0; i < n; i++) {
        if (vetor[i] % 3 == 0 && vetor[i] % 5 == 0) {
            vetor[i] = "FizzBuzz";
        }
        else if (vetor[i] % 3 == 0) {
            vetor[i] = "Fizz";
        }
        else if (vetor[i] % 5 == 0) {
            vetor[i] = "Buzz";
        }
        else if (vetor[i] % 7 == 0) {
            vetor[i] = "Boom";
        }
    }

    alert(`Resposta: ${vetor}`);
}
function solucaoQ3() {
    let vetor = ["p","a","l"]
    

    for (let index = 0; index < vetor.length; index++) {
        vetor[index] = vetor[vetor.length - index]
        console.log(vetor[index])
    }
    console.log(vetor)
}




