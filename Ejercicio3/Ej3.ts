//Ejercicio 3 - Práctica 1 - Arquitectura y Programación de Sistemas en Internet
//Jesús Cuesta Bartolomé
//Hacer una función que tenga un parámetro de entrada que sea un array de strings, el cual se deberá ordenar alfabéticamente y devolver el primer valor que haya separando sus letras con espacios.

function ordenarYSeparar(arrayDeStrings: string[]): string {    // Función que toma un array de strings como entrada
    
    const arrayOrdenado = arrayDeStrings.sort();    // Ordenar el array alfabéticamente
  
    const first = arrayOrdenado[0]; // Tomar el primer valor del array ordenado
  
    const letrasSeparadas = first.split('').join(' ');  // Separar las letras del primer valor con espacios
  
    return letrasSeparadas; // Devolvemos el resultado
  }
  // Ejemplo
  const miArray = ['perro', 'oso', 'leon', 'tigre', 'panda']; // Definimos el array de strings
  const resultado = ordenarYSeparar(miArray); // Llamamos a la función
  console.log(resultado); // Imprimimos
  


