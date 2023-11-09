/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades 
y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el 
arreglo generado, luego realizar las siguientes acciones:

- Mostrar la longitud del arreglo.
- Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
- Añade en última posición la ciudad de París.
- Escribe por pantalla el elemento que ocupa la segunda posición.
- Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

//* Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’,
  ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’,
  ‘Sídney, Australia’, ‘El Cairo, Egipto’]

//* Output:
El arreglo de ciudades tiene 10 elementos
• Elemento 1er posicion: Nueva York, Estados Unidos
• Elemento 3er posicion: Tokio, Japón
• Elemento ultima posicion: El Cairo, Egipto
• Elemento ultima posicion: Paris

Arreglo de ciudades
• Elemento: Nueva York, Estados Unidos 
• Elemento: Barcelona
• Elemento: Barcelona, España 
• Elemento: Tokio, Japón
• Elemento: Londres, Reino Unido
• Elemento: Roma, Italia
• Elemento: Pekín, China
• Elemento: Río de Janeiro, Brasil 
• Elemento: Ámsterdam, Países Bajos
• Elemento: Sidney, Australia
• Elemento: El Cairo, Egipto
• Elemento: Paris
*/

let ciudades = []

do {
  let ciudadesUser = prompt('Ingrese el nombre de una ciudad')
  ciudades.push(ciudadesUser)
} while (confirm('¿Desea agregar otra ciudad?'));

document.write(`<h2>Arreglo de ciudades:</h2>`)
document.write(`<ul>`)
document.write(`<li>El arreglo de ciudades tiene ${ciudades.length} elementos.</li>`)
document.write(`<li>Elemento 1er posicion: ${ciudades[0]}.</li>`)
document.write(`<li>Elemento 3er posicion: ${ciudades[2]}.</li>`)
document.write(`<li>Elemento ultima posicion: ${ciudades[ciudades.length-1]}.</li>`)
ciudades.push('París, Francia')
document.write(`<li>Elemento ultima posicion: ${ciudades[ciudades.length-1]}.</li>`)
document.write(`<li>Elemento 2da posicion: ${ciudades[1]}.</li>`)
ciudades.splice(1, 0, 'Barcelona, España')
document.write(`<li>Elemento 2da posicion: ${ciudades[1]}.</li>`)
document.write(`</ul>`)