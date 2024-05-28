/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you
have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two
people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your
list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an
empty list at the end of your program.*/
let newGuests = ["Allama Iqbal", "Tipu Sultan", "My Father", "Ahmed", "Ali", "umar"];
console.log("I am reaaly sorry everyone that the table is not available on the party day so we need to reduce the guests");
let friend1 = newGuests.pop();
console.log(` Sorry Dear ${friend1} , You are not invited for the dinner`);
let friend2 = newGuests.pop();
console.log(` Sorry Dear ${friend2} , You are not invited for the dinner`);
let friend3 = newGuests.pop();
console.log(` Sorry Dear ${friend3} , You are not invited for the dinner`);
let friend4 = newGuests.pop();
console.log(` Sorry Dear ${friend4} , You are not invited for the dinner`);
console.log(`Dear ${newGuests[0]} , "you are still invited"`);
console.log(`Dear ${newGuests[1]} , "you are still invited"`);
export {};
