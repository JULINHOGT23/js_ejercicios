// calcular cuantos dias falta para el dia de la madre.

// solucion

let fecha1 = new date('04/21/2023');
let fecha2 = new date('05/14/2023');

let milisegundosDias = 24 * 60 * 1000;

let milisegundosTranscurridos = Math.round(fecha1.getTime() - fecha2.getTime());

let diasTranscurridos = Math.round(milesegundosTranscurridos/milesegundosDias);

console.log(fecha1);
console.log(fecha2);

console.log(diasTranscurridos);