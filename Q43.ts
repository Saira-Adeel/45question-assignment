/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of 
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to 
show that you have one array of the original names and one array with the Great added to each magician’s name.*/

type MagicianName = string; // Define type alias for magician names (string)

const originalMagicians: MagicianName[] = ["Shahrukh Zahoor", "Munawar Khan", "Mian Afzal Rasheed"];

function makeGreat(magicians: MagicianName[]): MagicianName[] {
//   """Modifies a list of magicians by adding 'The Great' before each name.

//   This function creates a copy of the original list to avoid modifying it, 
//   then adds 'The Great' to each name in the copied list, and returns the modified list.
//   """
  // Create a copy of the list using spread syntax
  const greatMagicians: MagicianName[] = [...magicians];  
  for (let i = 0; i < greatMagicians.length; i++) {
    greatMagicians[i] = `The Great ${greatMagicians[i]}`; // Fix the error (if any)
  }
  return greatMagicians;
}

function showMagicians(magicians: MagicianName[]): void {
//   """Prints a list of magicians."""
  console.log("Here is a list of the Magicians:");
  for (const magician of magicians) {
    console.log(magician);
  }
}

// Make a copy of the magicians list and add 'The Great' to each name
const greatMagicians = makeGreat(originalMagicians);

// Show the original magicians (unchanged)
showMagicians(originalMagicians);

// Show the great magicians (modified list)
showMagicians(greatMagicians);
