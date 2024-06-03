function filterArray(numbers, value) {
  // Створюємо порожній масив для зберігання підходящих чисел
  const filteredNumbers = [];

  // Ітеруємо кожен елемент масиву numbers
  for (let i = 0; i < numbers.length; i++) {
    // Якщо елемент більший за value, додаємо його до filteredNumbers
    if (numbers[i] > value) {
      filteredNumbers.push(numbers[i]);
    }
  }

  // Повертаємо новий масив з підходящими числами
  return filteredNumbers;
}

// Перевіряємо роботу функції
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([10, 15, 20, 25], 18)); // [20, 25]
console.log(filterArray([5, 8, 12, 19], 10)); // [12, 19]
console.log(filterArray([2, 3, 5, 7, 11], 6)); // [7, 11]
console.log(filterArray([3, 6, 9, 12, 15], 9)); // [12, 15]
