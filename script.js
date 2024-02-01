// Values and Variables
const country = "Nigeria";
const continent = "Africa";
let population = 206;

console.log(country);
console.log(continent);
console.log(population);

// Data Types
let isIsland = true;
let language;

console.log(isIsland);
console.log(language);

// Let, const, Var
language = "English";
console.log(language);

// Basic Operators
let countryInHalf = population / 2;
console.log(countryInHalf);

population++;
console.log(population);

let finlandPopulation = 60;

let isMyCountryMore = population > finlandPopulation;
console.log(isMyCountryMore);

const description =
  country +
  " is in " +
  continent +
  ", and some of its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Strings and Template Literals
const newDescription = `${country} is in ${continent}, and some of its ${population} million people speak ${language}`;
console.log(newDescription);

// Taking Decisions: if / else statements
const countryAverage = population - 33;

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is ${countryAverage} below average`);
}
// Type Conversion and Coercion
const operation1 = "9" - "5";
const operation2 = "19" - "13" + "17";
const operation3 = "19" - "13" + 17;
const operation4 = "123" < 57;
const operation5 = 5 + 6 + "4" + 9 - 4 - 2;
console.log(operation1);
console.log(operation2);
console.log(operation3);
console.log(operation4);
console.log(operation5);

const numNeighbours = Number(
  prompt("How many neighbour countries does your countr have?")
);
if (numNeighbours === 1) console.log("Only 1 border!");
else if (numNeighbours > 1) console.log("More than 1 border");
else console.log("No borders");

const speakEnglish = true;
const lessPeople = true;
const notAnIsland = true;

if (speakEnglish && lessPeople && notAnIsland) {
  console.log("You should live in Nigeria");
} else {
  console.log("Nigeria doesn't meet your criteria :(");
}
