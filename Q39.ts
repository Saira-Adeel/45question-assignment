/*City Names: Write a function called city_country() that takes in the name of a city and its country. 
The function should return a string formatted like this:


"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/

function cityCountry(city: string, country: string): string {
    return `${city.toUpperCase()}, ${country.toUpperCase()}`;
  }
  
  const lahorePakistan = cityCountry('Lahore', 'Pakistan');
  const torontoCanada = cityCountry('Toronto', 'Canada');
  const parisFrance = cityCountry('Paris', 'France');
  
  console.log(lahorePakistan);
  console.log(torontoCanada);
  console.log(parisFrance);