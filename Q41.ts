/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which 
prints the name of each magician in the array.*/



const magicians: string[] = [
    "Shahrukh Zahoor", 
    "Munawar Khan", 
    "Mian Afzal Rasheed", 

  ];
  
  function showMagicians(magicians: string[]): void {
    console.log("Here is a list of Pakistani magicians");
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  showMagicians(magicians);