// // // js-1 // // //
//////////////////PROBLEM 1////////////////////

//Create a variable called myName that is a string data type

//Code here
// var myName = "Harlan";

// //////////////////PROBLEM 2////////////////////

// //Create a variable called myAge that is a number data type

// //Code here
// var myAge = 29;

// //////////////////PROBLEM 3////////////////////

// //Create a variable called lovesCode that is a boolean data type

// //Code here
// var lovesCode = true;

// //////////////////PROBLEM 4////////////////////

// //Create a variable called greatestFear that is undefined because we fear nothing

// //Code here
// var greatestFear;

// //////////////////PROBLEM 5////////////////////

// //Create a variable called devMountainGoal that is null because we are just starting out

// //Code here
// var devMountainGoal = null;

// //////////////////PROBLEM 6////////////////////

// //Create a function declaration called greeting that
// //accepts name as its only parameter.
// //greeting should return the string "Hello, "
// //plus the value of the name parameter.

// //Code here
// function greeting(name) {
//   return "Hello, " + name;
// }

// //////////////////PROBLEM 7////////////////////

// //Rewrite the function greeting as a function expression.
// //Name it newGreeting.

// //Code Here
// var newGreeting = function(name) {
//   return "Hello, " + name;
// };

// //////////////////PROBLEM 8////////////////////

// //Create an array called groceries with the values
// //"apples", "milk", "eggs", "bread"

// //Code Here
// var groceries = ["apples", "milk", "eggs", "bread"];

// //////////////////PROBLEM 9////////////////////

// //Create an object saved to the variable dog.
// //The dog object should have the following properties:
// //name (a string), color (a string), age (a number),
// //and goodBoy (a boolean).

// //Code Here
// var dog = {
//   name: "woof",
//   color: "red",
//   age: 10,
//   goodBoy: true
// };

// //...access the dog's name from the object and assign it to a
// //variable called devMountainClassPet.

// //Code Here
// var devMountainClassPet = dog.name;

// //////////////////PROBLEM 10////////////////////

// //Write a function called nameCheck that takes in a name parameter.
// //nameCheck should check if the name equals 'Steven'. If it does,
// // return 'What is up Steven?'
// //If the name parameter is Bryan, return 'Hey Bryan!'
// // If the name parameter is anything else, return 'Cool name, NAMEPARAM'
// // with NAMEPARAM being the name parameter being passed in

// // Code here
// function nameCheck(name) {
//   if (name == "Steven") {
//     return "What is up Steven?";
//   } else if (name == "Bryan") {
//     return "Hey Bryan!";
//   } else {
//     return "Cool name, " + name;
//   }
// }

// //////////////////PROBLEM 11////////////////////

// // Create a function called add that takes in two parameters
// // that will be numbers.
// // The add function should return the two parameters added together

// //Code Here
// function add(num1, num2) {
//   return num1 + num2;
// }

// //Now invoke add, passing in the numbers 3 and 4
// //storing the result in the variable mathSum.

// //Code Here
// var mathSum = add(3, 4);

// //////////////////PROBLEM 12////////////////////

// //Write a function called faveColorFinder that takes in one parameter called color
// // that will be a string.
// // If the passed in color equals 'red', return 'red is a great color'
// // If the passed in color equals 'green', return 'green is a solid favorite color'
// // If the passed in color equals 'black', return 'so trendy'
// // Otherwise, you should return the string 'you need to evaluate your favorite color choice'

// // Code here
// function faveColorFinder(color) {
//   if (color == "red") {
//     return "red is a great color";
//   } else if (color == "green") {
//     return "green is a solid favorite color";
//   } else if (color == "black") {
//     return "so trendy";
//   } else {
//     return "you need to evaluate your favorite color choice";
//   }
// }

// //////////////////PROBLEM 13////////////////////

// let duck = "cute";

// function bathroom() {
//   let rubberDuck = "squeaky";
//   function bathtub() {
//     let sailorDuck = "nautical";
//   }
// }

// function pond() {
//   let realDuck = "fluffy";
// }

// //There are 4 variables above: duck, rubberDuck, sailorDuck and realDuck
// //all within different scopes.
// //Given the functions and variables above, edit the arrays
// //below to contain only the appropriate variable names
// //as strings.

// //This array should contain the variable names (as strings) accessible in the global scope.
// let globalScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

// //This array should contain the variable names (as strings) accessible in the bathroom function.
// let bathroomScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

// //This array should contain the variable names (as strings) accessible in the bathtub function.
// let bathtubScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

// //This array should contain the variable names (as strings) accessible in the pond function.
// let pondScope = ["duck", "sailorDuck", "rubberDuck", "realDuck"];

// //////////////////PROBLEM 14////////////////////

// //Create a variable called age with your age assigned to you

// // Code Here
// var age = 29;

// // FLASH FORWARD TO NEXT YEAR
// // reassign the value of age to be one greater than it was, because, we all get older

// // Code Here
// age = 30;
// // Good news! We can live forever. Set your age to 999

// // Code Here
// age = 999;
// // // js 1 // // //

// // // js 2 // // //
/*
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

/*
  Create an object called me.
  Give it a key of name with the value being your name, and another key of age with the value being your age.
  Then alert your name using dot notation.
*/

// //Code here
// var me = {
//     name: "Harlan",
//     age: 30
//   };

//   //alert(me.name);

//   ////////// PROBLEM 2 //////////

//   /*
//     Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday.
//     Have the values to those keys be strings that are equal to your favorite thing in that category.
//   */

//   //Code here
//   var favoriteThings = {
//     band: "Lofi",
//     food: "Pizza",
//     person: "Devin",
//     book: "Black Company",
//     movie: "Lord of the Rings",
//     holiday: "Christmas"
//   };

//   /*
//     After you've made your object, use bracket or dot notation to add another key named 'car' with the value being your favorite car
//     and then another key named 'brand' with the value being your favorite brand.
//   */

//   //Code here
//   favoriteThings.car = "Tesla";
//   favoriteThings.brand = "Yes";

//   /*
//     Now use bracket or dot notation to change the value of the food key in your favoriteThings object to be 'Chicken Nuggets'
//     and change the value of the book key in your favoriteThings object to be 'Harry Potter'.
//   */

//   //Code here
//   favoriteThings.food = "Chicken Nuggets";
//   favoriteThings.book = "Harry Potter";

//   ////////// PROBLEM 3 //////////

//   /*
//     Create an empty Object called backPack.
//     Now, create a variable called 'item' and set it equal to the string 'firstPocket'.
//     Using bracket notation, add a 'firstPocket' key (or property) to backPack, using 'item'.
//     Set the value of that key to 'chapstick'.
//     Using dot notation, add another key (or property) to your backPack object that is named color, with the value being the color of your backpack.
//   */

//   //Code here
//   var backPack = {};
//   var item = "firstPocket";
//   backPack[item] = "chapstick";
//   /*
//     After you do the above, alert your entire backPack object.
//   */

//   //Code here

//   /*
//   You probably noticed that it just alerted [object Object].
//   Alerting to see the data in your Object doesn't work so well.
//   Instead, console.log your whole backPack object and then check out the console.
//   */

//   //Code here
//   console.log(backPack);

//   ////////// PROBLEM 4 //////////

//   // Do not edit the code below.
//   var user2 = {
//     name: "Bryan",
//     age: 24,
//     pwHash: "U+Ldlngx2BYQk",
//     email: "BryanSmith33@gmail.com",
//     birthday: "05/02/1990",
//     username: "bryansmith33"
//   };
//   // Do not edit the code above.

//   /*
//     Let's say I, the user, decided to change my name and email address to the following:
//     name -> 'Bryan G. Smith' and email -> 'bryan.smith@devmounta.in'.
//     Make that change without modifying the original object code above.
//   */

//   //Code Here
//   user2.name = "Bryan G. Smith";
//   user2.email = "bryan.smith@devmounta.in";

//   /////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
//   ////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////

//   ////////// PROBLEM 5 //////////

//   /*
//     Create an empty object called methodCollection.
//   */

//   //Code Here
//   var methodCollection = {};

//   /*
//     Now add two methods (functions that are properties on objects) to your methodCollection object.
//     One called 'alertHello' which alerts 'hello' and another method called 'logHello' which logs 'hello' to the console.
//   */

//   //Code Here
//   methodCollection.alertHello = function() {
//     alert("hello");
//   };
//   methodCollection.logHello = function() {
//     console.log("hello");
//   };

//   /*
//     Now call your alertHello and logHello methods.
//   */

//   //Code Here

//   ////////// PROBLEM 6 //////////

//   /*
//     Create a function called makePerson which takes in name, birthday, ssn as its parameters.
//     Return a new object with all of the information that you passed in.
//   */

//   //Code Here

//   function makePerson(name, birthday, ssn) {
//     return (clone = {
//       name: name,
//       birthday: birthday,
//       ssn: ssn
//     });
//   }

//   ////////// PROBLEM 7 //////////

//   /*
//     Create a function called makeCard which takes in cardNumber, expirationDate, and securityCode to make a Credit Card object.
//     Return that object so that whenever you invoke makeCard, you get a brand new credit card.
//   */

//   //Code Here

//   function makeCard(cardNumber, expirationDate, securityCode) {
//     return (newCard = {
//       num: cardNumber,
//       exp: expirationDate,
//       sec: securityCode
//     });
//   }
// // // js 2 // // //
