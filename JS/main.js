function botao(){
    document.getElementById("agradece").innerHTML = "Obrigado por clicar ";
    //alert("Obrigado por clicar"); 
}

function redirecionar(){
    window.open("https://www.linkedin.com/in/rafael-gomes-spadoni-b1b200190/")
}

function trocar(elemento){
    elemento.innerHTML = "troquei kk"
    //document.getElementById("mousemove").innerHTML = "troquei kk"
    //alert("trocar texto");
}
function voltar(elemento){
    elemento.innerHTML = "passe o mouse para trocar"
    //document.getElementById("mousemove").innerHTML = "passe o mouse para trocar"
}
//Function 
/*
function soma(n1, n2){
    return n1 + n2;
}



function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("qual sua idade ");
console.log(validaIdade(idade));
alert(soma(10, 10));
*/

//Date
/*var d = new Date();
alert(d);*/

// laço de repetição for

/*var count;
for(count=0; count <=5; count++){
    alert(count);
};*/
//laço de repetição while

/*var count = 0;
while (count < 5){
    console.log(count);
    count = count + 1;
}*/

//condicionais se e se não

/*var idade = prompt("Qual sua idade");

if (idade > 18)
{
    alert("maior de idade");
}else{
    alert("menor de idade");
};*/

//dicionario com lista

/*var frutas = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(frutas);
alert(frutas[1].nome);*/

//Dicionario

/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);*/

//lista

/*var lista = ["maça", "pera", "laranja"];
lista.push("uva");

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" | "));
*/

//alert

/*var nome = "The Ridller";
var idade = 18;
//alert("bem vindo " + nome + " sua idade é " + idade);
console.log(nome.replace("rafael"));
*/