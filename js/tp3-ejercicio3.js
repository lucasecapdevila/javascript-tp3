/*
3- Escribir un script que simule el lanzamiento de dos dados. 
Hacer uso de la función Math.random para obtener números aleatorios 
entre 1 y 6 para cada uno de los lanzamientos de los dados. 
Sumar el resultado de lanzar dos dados y anotar en un array 
el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

Ejemplo de salida:

Suma		Apariciones
  2		      1
  3		      5
  4		      5
  5		      4
  6		      8
  7		      6
  8		      5
  9		      5
  10        4
  11	      2
  12	      2
*/

let aparicionesSumas = []

for(let i = 0; i < 50; i++){
  let numAleatorio = Math.floor(Math.random() * 6) + 1
  let numAleatorio2 = Math.floor(Math.random() * 6) + 1
  let suma = numAleatorio + numAleatorio2
  aparicionesSumas.push(suma)
}

document.write(`
<table>
  <tr>
    <th>Suma</th>
    <th>Apariciones</th>
  </tr>
`)
for(let i = 0; i < 11; i++){
  let suma = aparicionesSumas.filter(x => x === i + 2).length
  document.write(`<tr>`)
  document.write(`<td>${i + 2}</td>`)
  document.write(`<td>${suma}</td>`)
  document.write(`</tr>`)
}

console.log(aparicionesSumas.length);
document.write(`</table>`)