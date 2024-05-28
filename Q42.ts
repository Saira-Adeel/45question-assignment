/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the 
array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has 
actually been modified.*/



let newMagicians: string[] = [
    "Shahrukh Zahoor",
    "Munawar Khan",
    "Mian Afzal Rasheed",
  ];
  
  function makeGreat(newMagicians: string[]): void {
    for (let i = 0; i < newMagicians.length; i++) {
      newMagicians[i] = `The Great ${newMagicians[i]}`;
    }
  }
  
  function showMagician(newMagicians: string[]): void {
    console.log("Here is a list of the Great Pakistani Magicians:");
    for (const magician of newMagicians) {
      console.log(magician);
    }
  }
  
  // Call the functions with the correct variable
  makeGreat(newMagicians);
  showMagician(newMagicians);