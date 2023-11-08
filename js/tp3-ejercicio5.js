/*
5- Definir una función que muestre información sobre una cadena 
de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena
está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
*/

const textoUsuario = prompt('Ingrese un texto')
const mayusculas = /[A-Z]/g;

const deQueEstaFormada = (texto) => {
  let mayusEncontradas = texto.match(mayusculas)

  if(!mayusEncontradas){
    document.write('El texto contiene solo minúsculas.')
  } else if(mayusEncontradas.length === texto.length){
    document.write('El texto contiene solo mayúsculas.')
  } else{
    document.write('El texto contiene mayúsculas y minúsculas.')
  }
}

deQueEstaFormada(textoUsuario)