const minhaPrimeiraVariavel = 'Font Academy';
let minhaSegundaVariavel = 'Bruno';

//variavel
//const constante (Não muda)


const hifen = '-';
const nome = 'Bruno';
const email = 'brunoscodeller@hotmail.com';
const telefone = '38758798';

let idade = '18 anos';
let rua = 'R. Jose T. Camargo';
let cidade = 'Indaiatuba';

console.log(nome, email,telefone);
console.log(idade, rua, hifen, cidade);

idade = '30 anos';
rua = 'R. do Lebron';
cidade = "Americana";

console.log(idade, rua, hifen, cidade);

const variavelString = 'teste';
const variavelNumero = 55;
const variavelBolean = true;
const variaelUndefined = undefined;
const variavelNull = null;

const contato = nome + ' ' + email + ' ' + telefone;
let endereco = rua +' '+ cidade;

const ano = 2023;
const idadeNum = 30;
const nota1 = 7;
const nota2 = 5;
const nota3 = 8;
const nota4 = 10;

let soma = nota1 + nota2 + nota3 + nota4;
let nacimento = ano - idadeNum;
let media = soma / 4;

console.log(contato);
console.log(endereco);
console.log(nacimento);
console.log(soma);
console.log(media);

const aprovado = false;
const vivo = true;

console.log(aprovado, vivo);

/* 
    === igual -> 10 === 10 True
    !== diferente -> 10 !== 20  False
    ! negação -> !x (Se x é True, ele retorna False)
    > maior
    < menor
    >= maior igual
    <= menor igual
*/

console.log('maior',nota1 > nota2);
console.log('menor',nota1 < nota2);
console.log('maior igual',nota1 >= nota2);
console.log('menor igual',nota1 <= nota2);
console.log('igual',nota1 === nota2);
console.log('diferente',nota1 !== nota2);
console.log('negacao',!nota2);
console.log('Unico numero True',!0);

/*
    && (E) Compara se os valores são True, Se algum for False, ele retorna False
    || (OU) Compara se os valores são True, Se algum for True, ele retorna True
*/ 

let valor1 = true;
let valor2 = false;
let valor3 = true;
let valor4 = false;

console.log('E',valor1 && valor2);
console.log('OU',valor1 || valor2);
console.log('CombinandoE:',(valor1 && valor3 && valor1) && valor4 );
console.log('CombinandoE2:',(valor1 && valor3 && valor1) && valor3 );
console.log('CombinandoOU:',(valor1 || valor2 || valor1) || valor4 );
console.log('CombinandoOU2:',(valor2 || valor4 || valor2) || valor4 );
console.log('CombinandoMisto:',(valor1 && valor2 || valor1) && valor4 || variavelBolean );

function teste(){
    console.log ('oi');
    return
    /* Depois do Return nada é executado */
    console.log ('oi');
}

function soma(a, b){
    return a + b;
}

Math.pow (15, 20)

@media screen and (max-with 810px){
}
