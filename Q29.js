/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
let favFruit = ["Apple", "orange", "berry", "kiwi"];
if (favFruit.includes("Apple")) {
    console.log("You really like Apples!");
}
if (favFruit.includes("orange")) {
    console.log("You really like oranges!");
}
if (favFruit.includes("berry")) {
    console.log("You really like berries!");
}
if (favFruit.includes("kiwi")) {
    console.log("You really like kiwis!");
}
export {};
