//Ejercicio 2 - Práctica 1 - Arquitectura y Programación de Sistemas en Internet
//Jesús Cuesta Bartolomé
//Hacer una función que tenga por parámetro de entrada un numero y devuelva un array. 
//Dicho array deberá contener un listado de todos los números que sean múltiplos de 3 o de 5 que haya desde el 0 hasta el parámetro de entrada, en caso de que sea múltiplo de ambos solo aparecerá una vez

function multipl3_5(numero: number): number[] {
    const multiplos = []; // Creamos un array para almacenar los múltiplos
    
    for (let i = 0; i <= numero; i++) { // Recorremos desde 0 hasta el número dado.
      
      if (i % 3 === 0 || i % 5 === 0) { // Comprobamos si el número es múltiplo de 3 o de 5.
        multiplos.push(i); // Si es múltiplo, lo agregamos al array de múltiplos.
      }
    }
    return multiplos; // Devolvemos el array con los múltiplos encontrados.
  }
  // Ejemplo
  const num = 10; // Definimos un número hasta donde encontrar los múltiplos
  const resultado = multipl3_5(num); // Llamamos a la función con nuestro número
  console.log(resultado); // Imprimimos el resultado 
  