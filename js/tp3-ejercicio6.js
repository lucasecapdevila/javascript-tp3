/*
6- Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo,
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

  • La fórmula del perímetro es p = 2*(a +b)

Ejemplo:

Input:
lado A = 24			Output: 58
lado B = 5
*/

const lado1 = parseInt(prompt('Ingrese el valor del primer lado del rectángulo'))
const lado2 = parseInt(prompt('Ingrese el valor del segundo lado del rectángulo'))

const perimetro = (lado1, lado2) => {
  let resultado = 2 * (lado1 + lado2)
  if(isNaN(resultado)){
    document.write('Debe ingresar valores válidos.')
  } else{
    document.write(`El perímetro es ${resultado}`)
  }
}

perimetro(lado1, lado2)