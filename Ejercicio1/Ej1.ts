//Ejercicio 1 - Práctica 1 - Arquitectura y Programación de Sistemas en Internet
//Jesús Cuesta Bartolomé

function quicksort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  const pivot = array[0];
  const left = [];
  const right = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  return [...quicksort(left), pivot, ...quicksort(right)];
}

// Ejemplo de uso:
const array = [5, 2, 9, 1, 5, 6];
const sortedArray = quicksort(array);
console.log(sortedArray); // Imprime [1, 2, 5, 5, 6, 9]

