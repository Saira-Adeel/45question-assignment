/*Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers 
end in th, except 1, 2, and 3.
• Store the numbers 1 through 9 in a array.

• Loop through the array.

• Use an if-else chain inside the loop to print the proper ordinal ending for each number. 
Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.*/

function getOrdinal(number: number): string {
    if (number <= 0 || number > 9) {
      throw new Error("Number must be between 1 and 9");
    }
  
    const lastDigit = number % 10;
  
    switch (lastDigit) {
      case 1:
        return `${number}st`;
      case 2:
        return `${number}nd`;
      case 3:
        return `${number}rd`;
      default:
        return `${number}th`;
    }
  }
  
  for (let i = 1; i <= 9; i++) {
    console.log(getOrdinal(i));
  }