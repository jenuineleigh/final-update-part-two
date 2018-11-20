// inform the user what they should be wearing based on two conditions: the temperature and the event type.
// This information will be gathered through prompts, declare and initialize the following three variables:
// 		eventType will contain the information entered in the prompt for the event type.
// 		tempFahr will contain the information entered in the prompt for the temperature in Fahrenheit.
// 		result is a string that will be logged to the console.
// Use conditional statements to drive the decision making of your program.
// Initializes result as a single string using concatenation. 
// This string will contain the event type, temperature, and clothing suggestion (see example below).
// Logs the result variable to the console.
// 		Example: “Since it is 33 degrees and you are going to a formal event, you should wear a suit and coat.”

// event type
// casual
// semi-formal
// formal

// clothing suggestion
// something comfy
// a polo
// a suit

// temperature
// < 54 'degrees Fahrenheit
// 54-70 'degrees Fahrenheit
// > 54 'than degrees Fahrenheit

// clothing suggestion
// a coat
// a jacket
// no jacket

let eventType = prompt("What kind of event are you going to?")

if (eventType === "casual") {
  clothingSuggestion = "something comfy";
} else if (eventType === "semi-formal") {
  clothingSuggestion = "a polo";
} else if (eventType === "formal") {
  clothingSuggestion = "a suit";
} else {
  console.log('Invalid event type.');
};
console.log(clothingSuggestion);



let tempFahr = prompt("How many degrees Farenheit is it");
let outerwear; 

if (tempFahr < 54) {
  outerwear = "a coat";
} else if (tempFahr >= 54 && tempFahr <= 70) {
  outerwear = "a jacket";
} else if (tempFahr > 70) {
  outerwear = "no jacket";
} else {
  console.log('Invalid temperature.');
};
console.log(outerwear);

let result = `Since it is ${tempFahr} degrees and you are going to a ${eventType}, you should wear ${clothingSuggestion} and ${outerwear}`

console.log(result)






