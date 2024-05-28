/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/



// Define the array of places
let places: string[] = ["Tokyo", "Paris", "Saudia Arabia", "Sydney", "Egypt"];

// Print the array in its original order
console.log("Original order:");
console.log(places);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical order:");
console.log(places.sort());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse alphabetical order:");
console.log(places.reverse());

// Show that the array is still in its original order
console.log("\nOriginal order (unchanged):");
console.log(places);

// Reverse the order of the list
places.reverse();
console.log("\nReversed order:");
console.log(places);

// Reverse the order of the list again to get back to its original order
places.reverse();
console.log("\nBack to original order:");
console.log(places);

// Sort the array so it’s stored in alphabetical order
places.sort();
console.log("\nSorted in alphabetical order:");
console.log(places);

// Sort to change the array so it’s stored in reverse alphabetical order
places.reverse();
console.log("\nBack to reverse alphabetical order:");
console.log(places);
