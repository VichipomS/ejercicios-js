
//No cambiar el nombre de la función ordenarNumeros


function ordenarNumeros(num1, num2, num3) {

    let mayor
    let centro
    let menor
  
    if (num1 >= num2 && num1 >= num3) {
      mayor = num1;
      centro = Math.max(num2, num3);
      menor = Math.min(num2, num3);
    } else if (num2 >= num1 && num2 >= num3) {
      mayor = num2;
      centro = Math.max(num1, num3);
      menor = Math.min(num1, num3);
    } else {
      mayor = num3;
      centro = Math.max(num1, num2);
      menor = Math.min(num1, num2);
    }
  
    // No modificar el código debajo de esta línea
    return {
      mayor,
      centro,
      menor,
      ordenMayorAMenor: [mayor, centro, menor],
      ordenMenorAMayor: [menor, centro, mayor],
    };
  }
  console.log(ordenarNumeros(1423, 2324, 3432))
  
  module.exports = ordenarNumeros;