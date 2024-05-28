// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.


let personName = "Saira";

//  upper case

console.log(personName.toUpperCase());

// lower case

console.log(personName.toLowerCase());

// titlecase

let firstLetter :string = personName . charAt (0). toUpperCase();

let restLetter :string = personName . slice (1). toLowerCase();

let titlecase = firstLetter + restLetter

console.log(titlecase);