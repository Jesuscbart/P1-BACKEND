//Ejercicio 1 - Práctica 1 - Arquitectura y Programación de Sistemas en Internet
//Jesús Cuesta Bartolomé

// Función quicksort que sirve para ordenar un array de números de menor a mayor
function quicksort(array: number[]): number[] {
  
  if (array.length <= 1) {  // Si el array está vacío o tiene 1 elemento, ya está ordenado, así que lo devolvemos tal como está
    return array;
  }

  // Seleccionamos el primer elemento del array como pivote
  const pivot = array[0];

  // Creamos dos arrays vacíos para almacenar los elementos menores y mayores que el pivote
  const left = [];
  const right = [];

  // Recorremos el array desde el segundo elemento hasta el último
  for (let i = 1; i < array.length; i++) {  // Comparamos cada elemento con el pivote
    if (array[i] < pivot) {   // Si es menor, lo agregamos al array "left"
      left.push(array[i]);
    } 
    else {  // Si es mayor o igual, lo agregamos al array "right"
      right.push(array[i]);
    }
  }
  // Llamamos recursivamente a quicksort en los arrays "left" y "right" y unimos los resultados
  return quicksort(left).concat(pivot, quicksort(right));
}

// Ejemplo:
const array = [12, 2, 9, 1, 7, 5];

// Llamamos a la función quicksort para ordenar el array
const sortedArray = quicksort(array);

// Imprimimos el array ordenado en la consola
console.log(sortedArray);
