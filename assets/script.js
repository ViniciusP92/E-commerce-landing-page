const imagem = document.getElementById("img-principal-2");

const clicaveis = document.querySelectorAll(".clicavel");

clicaveis.forEach(function (clicavel) {
    clicavel.addEventListener("click", function (evento) {
        imagem.src = evento.target.currentSrc;
    });
    
});


function incrementValue()
{
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}


function reduceValue(){
    var value = parseInt(document.getElementById("number").value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    if(value >= 0){
    document.getElementById("number").value = value;
    }   
}

var operadorMais = document.getElementById("operador-mais");

operadorMais.addEventListener("click" , incrementValue);

var operadorMenos = document.getElementById("operador-menos");

operadorMenos.addEventListener("click" , reduceValue);