//* FUNCIONES

/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/

const numUsuario = parseInt(prompt('Ingrese un número'))

const numero = (num) => {
  if(isNaN(numUsuario)){
    document.write('Debe ingresar un valor válido.')
  } else if(num%2 === 0){
    document.write(`El número ${num} es par`)
  } else{
    document.write(`El número ${num} es impar`)
  }  
}

numero(numUsuario)