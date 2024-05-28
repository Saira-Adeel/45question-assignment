/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. Call the function three times, 
using a different number of arguments each time.*/

function buildSandwich(...items: string[]): void {

  
    
    if (items.length === 0) {
      console.log("You forgot to order a sandwich!");
      return;
    }
  
    console.log("You ordered a sandwich with:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
  }
  

  buildSandwich("bread", "cheese", "turkey");
  buildSandwich("bread", "lettuce", "tomato", "mustard");
  buildSandwich(); 