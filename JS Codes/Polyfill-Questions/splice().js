/*The splice() method changes the contents of an array by removing 
or replacing existing elements and/or adding new elements in place. */

// Polyfill for Array.prototype.splice (Not typically needed)
if (!Array.prototype.splice) {
  Array.prototype.splice = function (start, deleteCount, ...items) {
    // Simple implementation (not comprehensive)
    const array = this;
    const deletedItems = [];
    const actualStart =
      start < 0
        ? Math.max(array.length + start, 0)
        : Math.min(start, array.length);

    // Collect deleted items
    for (let i = 0; i < deleteCount; i++) {
      if (i + actualStart < array.length) {
        deletedItems.push(array[actualStart + i]);
      }
    }

    // Remove items
    array.length = array.length - deleteCount;

    // Add new items
    for (let i = 0; i < items.length; i++) {
      array.splice(actualStart + i, 0, items[i]);
    }

    return deletedItems;
  };
}

//test
const fruits = ["apple", "banana", "cherry", "date"];

// Remove 2 elements starting from index 1
const removedFruits = fruits.splice(1, 2);
console.log(removedFruits); // Expected output: ['banana', 'cherry']
console.log(fruits); // Expected output: ['apple', 'date']

// Add new elements at index 1
fruits.splice(1, 0, "blueberry", "kiwi");
console.log(fruits); // Expected output: ['apple', 'blueberry', 'kiwi', 'date']
