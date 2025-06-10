//Ej 1
let variableSinValor;
//Ej 2
let booleano1 = true;
let booleano2 = false;
//Ej 3
const PI = 3.14;
//Ej 4 
const TAU = 2 * PI;

// Booleanos 
//Ej 5
let booleanoAnd = (booleano1 = booleano2);

//Ej 6 (toma el ejercicio 2)
let booleanoNot = !booleano1;

//Ej 7 
let booleanoMix0 = (booleano1 || booleano2);

//Ej 8 
let incrementarDesp = 2; 
let resultadoDesp = incrementarDesp++;

//Ej 9 
let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

//Ej 10 si le pidiese que incremente +=10 en vez de 2++ , incrementaria a 10, una vez
let contarHasta10_2 = 0;
for (let i = 0; i < 10; i++) {
    contarHasta10_2++; //no hace falta el contarHasta10_2++ xq el primero ya incrementa
}
//Ej 11 // Crear las variables postI y postJ con valor 0 a continuación cree un bucle que itere 11 veces.
// En cada iteración se deberá sumar al valor de postI el valor de postJ++
let postI = 0;
let postJ = 0; 
for ( let i = 0; i < 11; i++) { // i -- 0 ----10-- itera 11 veces 
    postI = postI + postJ++;
}

//Ej 12
let sumaPares = 0; 
for (let i = 0; i <10; i += 2) {
    sumaPares += i
}

//Ej 13
let variableValorNumerico = 5; 

//Ej 14
const MiNombre = 'Emi'; 
//Ej 15 
const MiNumeroFav = 4;
//Ej 16
let booleanoOr = booleano1 || booleano2;

//Ej 17 Crear variable booleanoMix1 cuyo valor sea la comparación booleana 
// (booleano1 and (TAU/2 sea igual a PI)) or (variableValorNumerico mayor o igual que MiNumeroFav)
let booleanoMix1 = (booleano1 && (TAU / 2 === PI)) || (variableValorNumerico >= MiNumeroFav);

//Ej 18
let seisNoEsNueve = 6 !== 9;

//Ej 19 
let booleanoMix2 = variableValorNumerico > 0 || variableValorNumerico < -(MiNumeroFav * TAU);

//Ej 20
let valorSuma = MiNumeroFav + variableValorNumerico; 
//Ej 21
let valorResta = MiNumeroFav - variableValorNumerico; 
//Ej 22
valorMultiplicacion = MiNumeroFav * variableValorNumerico;
//Ej 23
let valorDivision = MiNumeroFav / 3;
//Ej 24
let contarHasta10 = 0;
while (contarHasta10 < 10) {
    contarHasta10++;
}
//Ej 25
let preI = 0
let preJ = 0 
for ( let i = 0; i < 11; i++) {
    preI += ++preJ;
}

//Ej 26
let sumaImpares = 0
for (let i = 0 ; i < 10;i ++) {
    if (i % 2 !== 0){
 sumaImpares += i;
    }
   
}
