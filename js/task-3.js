function makeArray(firstArray, secondArray, maxLength) {
  // Об'єднуємо два масиви в один
  const combinedArray = firstArray.concat(secondArray);

  // Фільтруємо масив, залишаючи тільки ті елементи, які менші або рівні maxLength
  const filteredArray = combinedArray.filter((element) => element <= maxLength);

  // Повертаємо відфільтрований масив
  return filteredArray;
}

// Перевіряємо роботу функції
console.log(makeArray([10, 20], [5, 15, 25], 20)); // [10, 20, 5, 15]
console.log(makeArray([1, 2, 3], [4, 5, 6], 4)); // [1, 2, 3, 4]
console.log(makeArray([7, 8], [9, 10, 11, 12], 10)); // [7, 8, 9, 10]
console.log(makeArray([1, 2], [3, 4, 5], 2)); // [1, 2]
console.log(makeArray([100, 200], [300, 400], 150)); // [100]
