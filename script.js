// Values and Variables
const country = "Nigeria";
const myCountryContinent = "Africa";
let myCountryPopulation = 206000000;

console.log(country);
console.log(myCountryContinent);
console.log(myCountryPopulation);

// Data Types
let isIsland = true;
let language;

console.log(isIsland);
console.log(language);

// Let, const, Var
language = "English";
console.log(language);

// Basic Operators
let myCountryInHalf = myCountryPopulation / 2;
console.log(myCountryInHalf);

let countryPlusOne = myCountryPopulation + 1;
console.log(countryPlusOne);

let finlandPopulation = 6000000;

let isMyCountryMore = myCountryPopulation > finlandPopulation;
console.log(isMyCountryMore);

const myCountryDescription =
  country +
  " is in " +
  myCountryContinent +
  ", and some of its 206 million people speak " +
  language;
console.log(myCountryDescription);

// Strings and Template Literals
const myNewCountryDescription = `${country} is in ${myCountryContinent}, and some of its 206 million people speak ${language}`;
console.log(myNewCountryDescription);

// Taking Decisions: if / else statements
