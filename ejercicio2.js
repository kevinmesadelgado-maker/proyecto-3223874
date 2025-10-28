
const prompt = require("prompt-sync")();

let nombre = prompt("Ingrese su nombre: ");

let nota1 = parseFloat(prompt("Ingrese la primera nota: "));
let nota2 = parseFloat(prompt("Ingrese la segunda nota: "));
let nota3 = parseFloat(prompt("Ingrese la tercera nota: "));

let sumaNotas = (nota1 + nota2 + nota3)
let promedio = sumaNotas / 3;

console.log("\nEstudiante:", nombre);
console.log("Promedio:", promedio.toFixed(2));

if (promedio >= 3.5) {
  console.log("Aprobó la materia");
} else {
  console.log("No aprobó la materia");
}
