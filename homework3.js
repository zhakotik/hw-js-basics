/*
1. Написати функцію, яка перетворює строку на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */
 const str = "Це довільний текст для створення масиву слів ";

  function stringToArray(str) {
    const arr = str.toLowerCase().split(' ').sort();
    const result = arr.filter((element) => element !== '');
    return result;
}


  console.log(stringToArray(str));
    
    
    // 2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
    // відсортованих за зростанням
    
    const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];
    function removeDuplicatesAndSort(arr) {
        const sortedArray = arr.sort((a, b) => a - b);
        return Array.from(new Set(sortedArray));
    }
    
    console.log(removeDuplicatesAndSort(initialArray)); 


    // /*
    // 3. Написати функцію, яка поверне масив парних чисел
    //  */

    const initialArray2 = [2, 3, 6, 7, 9, 12];
    function arrayOfEvens(arr) {
        const newArr = [];
        for (element of arr) {
          if (element % 2 === 0) {
            newArr.push(element)
          }
        }
        return newArr;
    }
    
    console.log(arrayOfEvens(initialArray2)); 
    
    // /*
    // 4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
    // кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
    //  */
    function createArray(element) {
      const arr = []
      for (let sum = element; sum <= 30; sum += element) {
        arr.push(sum)
      }
      return arr
    }
    
    
    console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
    console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]