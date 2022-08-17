// Count characters only
// Create a function will calculate how many times empty space occurred in a given string by the user and print out only the characters number
// Example :
// emptySpaces("Hi i") -> 3
const emptySpaces = (str) => {
      let sum = 0;
      str.split("").forEach(element => {
            if(element != " ") {
                  sum ++;
            }
      });
      return sum;
}
console.log(emptySpaces('Hi I am here'));


// Need more money
// Create a function that will receive a (user name , salary and his/her kids names)
// If the user has one kid subtract 30% taxes from the salary
// For two kids subtract 25% and 20% for more than two.
// If the user has no kids the taxes will be 55%
// Print out the result in a good formated way.
// Examples :
// salaryCalculator("Fabi", 5000, "Zain", "Uschi");
// salaryCalculator("Olga", 4055, "Zain");
function salaryCalculator(user, salary, ...kids) {
    if (kids.length == 0) {
      console.log(`${user}, you are getting payed ${(salary - 0.55*salary).toFixed(2)}Euros (${(0.55*salary).toFixed(2)}Euro taxes)`)
    } else if(kids.length == 1){
      console.log(`${user}, you are getting payed ${(salary - 0.30*salary).toFixed(2)}Euros (${(0.30*salary).toFixed(2)}Euro taxes)`)
    } else if(kids.length == 2){
      console.log(`${user}, you are getting payed ${(salary - 0.25*salary).toFixed(2)}Euros (${(0.25*salary).toFixed(2)}Euro taxes)`)
    } else {
      console.log(`${user}, you are getting payed ${(salary - 0.20*salary).toFixed(2)}Euros (${(0.20*salary).toFixed(2)}Euro taxes)`)
    }
}
salaryCalculator("Lara", 1000);
salaryCalculator("Dora", 1000, "Matt");
salaryCalculator("Fabi", 1000, "Zain", "Uschi");
salaryCalculator("Olga", 1000, "Zain", "Numa", "Gabi");


// This is crazy
// Create a function that looks inside a givin string if it has the word (JavaScript) if so print "I know it's crazy 😉".
// Examples :
// checkStr("Hi my name is HADI");
// checkStr("I like JavaScript");

function checkStr(str) {
      str.split(" ").map((ele, i) => {if(ele == "JavaScript") console.log("I know it's crazy")} )
}
checkStr("Hi my name is HADI");
checkStr("I like JavaScript");