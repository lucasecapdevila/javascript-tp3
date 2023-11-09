/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado
por pantalla, la creación de la tabla debe ser realizada con una función y mostrar
solo los resultados del 1 al 10 del número elegido por el usuario.
*/

const numUsuario = parseInt(prompt('Ingrese un número. Se mostrará la tabla de multiplicar de su número.'))

const tabla = (num) => {
  if(isNaN(numUsuario)){
    document.write('Debe ingresar un valor válido.')
  } else{
    for(let i = 1; i <= 10; i++){
      document.write(`<p>${num} x ${i} = ${num * i}</p>`);
    }
  }
}

tabla(numUsuario)