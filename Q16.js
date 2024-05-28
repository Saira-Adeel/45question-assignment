/* More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
 program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
let newGuests1 = ["Allama Iqbal", "Tipu Sultan", "My Father"];
let message = "You are cordially invited for the dinner party at my place tomorrow";
newGuests1.unshift("PARSI");
console.log(newGuests1);
newGuests1.splice(2, 0, "farooq");
console.log(newGuests1);
newGuests1.push("sindhi");
console.log(newGuests1);
console.log(`Dear ${newGuests1[0]} , ${message}}`);
console.log(`Dear ${newGuests1[1]} , ${message}}`);
console.log(`Dear ${newGuests1[2]} , ${message}}`);
console.log(`Dear ${newGuests1[3]} , ${message}}`);
console.log(`Dear ${newGuests1[4]} , ${message}}`);
console.log(`Dear ${newGuests1[5]} , ${message}}`);
export {};
