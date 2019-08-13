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

// // // js 2-2 // // //
/* 
  Once you complete a problem, refresh ./SpecRunner.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// // Do not edit the code below.
// var arr = [10, 20, 30];
// // Do not edit the code above.

// /*
//   Create a function named 'first' that is given 'arr' as an argument.
//   Return the first item in the given array.
// */

// //Code Here
// function first(arr) {
//   return arr.shift();
// }

// ////////// PROBLEM 2 //////////

// // Do not edit the code below.
// var arr = [40, 50, 60];
// // Do not edit the code above.

// /*
//   Create a function named 'last' that is given 'arr' as an argument.
//   Return the last item in the given array.
// */

// //Code Here

// function last(arr) {
//   return arr.pop();
// }

// ////////// PROBLEM 3 //////////

// // Do not edit the code below.
// var family = ["Tyler", "Jordyn", "Ryan", "Chelsey", "Ireland"];
// // Do not edit the code above.

// /*
//   Create a function named 'looper' that is given family as it's only argument.
//   Loop through the given array and alert every item in the array.
// */

// //Code Here
// function looper(family) {
//   for (let i = 0; i < family.length; i++) {
//     alert(family[i]);
//   }
// }
// ////////// PROBLEM 4 //////////

// // Do not edit the code below.
// var letters = ["A", "B", "C", "D", "E"];
// // Do not edit the code above.

// /*
//   Write a function called reversedLooper that is given letters as it's only argument.
//   Loop backwards, starting at the end of the letters array, alerting every item in the array.
// */

// //Code Here

// function reversedLooper(letters) {
//   for (let i = letters.length - 1; i >= 0; i--) {
//     alert(letters[i]);
//   }
// }

// ////////// PROBLEM 5 //////////

// // Do not edit the code below.
// var nums = [1, 2, 3, 6, 22, 98, 45, 23, 22, 12];
// // Do not edit the code above.

// /*
//   Write a function named evenFinder that is given nums as it's only argument.
//   Return an array that contains the even numbers from the nums array.
// */

// //Code Here
// function evenFinder(nums) {
//   var evens = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 === 0) {
//       evens.push(nums[i]);
//     }
//   }
//   return evens;
// }

// /////////////////////// EXTRA PRACTICE PROBLEMS BELOW ////////////////////
// ////////// MOVE ONTO NEXT SECTION BEFORE WORKING ON THESE ////////////////

// ////////// PROBLEM 6 //////////

// // Do not edit the code below.
// var numbersArray = [1, 2, 34, 54, 55, 34, 32, 11, 19, 17, 54, 66, 13];
// // Do not edit the code above.

// /*
//   Write a function called divider that is given one argument, numbersArray.
//   Have divider return an array with the first item in the array being the evens array (all the even values from numbersArray)
//   and the second item in the array being the odds array (all the odd values from numbersArray).
// */

// //Code Here
// function divider(numbersArray) {
//   var container = [[], []];
//   for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 2 === 0) {
//       container[0].push(numbersArray[i]);
//     } else {
//       container[1].push(numbersArray[i]);
//     }
//   }
//   return container;
// }
// ////////// PROBLEM 7 //////////

// // Do not edit the code below.
// var getRandomArbitrary = function() {
//   return Math.floor(Math.random() * 30);
// };
// // Do not edit the code above.

// /*
//   var numbers = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];
//   Above you're given a function (getRandomArbitrary) that will return a random number between 0 and 30.
//   There is also a commented out array full of numbers to help you visualize what your function will be receiving.
//   Write a function named finder that will take in an array as an argument.
//   In the function create a variable called randomNumber and set it to the invocation of getRandomArbitrary.
//   Loop through the array to see if randomNumber is in the array.
//   If it is, return true, if it's not, return false
// */

// //Code Here
// function finder(arr1) {
//   var answer = false;
//   var randomNumber = getRandomArbitrary();
//   console.log(randomNumber);
//   for (let i = 0; i < arr1.length; i++) {
//     if (randomNumber == arr1[i]) {
//       answer = true;
//     }
//   }
//   return answer;
// }

// ////////// PROBLEM 8 //////////

// // Do not edit the code below.
// var myGroceryList = ["chips", "pizza", "hotpockets", "MtnDew", "corndogs"];
// // Do not edit the code above.

// /*
//   Here we're going to write a function that mimics going shopping and checking things off of our grocery list and adding new items to our list.

//   Write a function called removeItem that is given two arguments, the first is myGroceryList, and the second is an item to remove from myGroceryList.
//   If the second argument (or the item to add or remove) matches an item in myGroceryList, remove that item from the your grocery list and return the new, updated grocery list.

//   Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list.
//   In addItem add the item you passed in to myGroceryList then return the new, updated grocery list.

//   In both removeItem and addItem check to see if the 'myGroceryList' and 'item' arguments are truthy.
//   If they are not, return an empty array.

//   Here are some examples of calling your functions and what should be returned:
//   removeItem(myGroceryList, 'chips') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs'];
//   addItem(myGroceryList, 'Jerky') --> ['pizza', 'hotpockets', 'MtnDew', 'corndogs', 'Jerky'];
//   removeItem(myGroceryList) --> [];
//   addItem() --> [];
// */

// //Code Here
// function removeItem(arr1, item) {
//   newList = arr1;
//   console.log(newList);
//   for (let i = 0; i < newList.length; i++) {
//     if (newList[i] == item) {
//       newList.splice(i, 1);
//     }
//   }
//   return newList;
// }

// function addItem(arr1, item) {
//   newList = arr1;
//   for (let i = 0; i < newList.length; i++) {
//     if (newList[i] !== item) {
//       newList.push(item);
//     }
//   }
//   return newList;
// }

// ////////// PROBLEM 9 //////////

// /*
//   Write a function called maker that creates an array, fills that array with numbers from 1 to 215, then returns the array.
// */

// //Code Here
// function maker() {
//   var newArr = [];
//   for (let i = 1; i < 216; i++) {
//     newArr.push(i);
//   }
//   return newArr;
// }

// ////////// PROBLEM 10 //////////

// // Do not edit the code below.
// var numbers = [5, "9", 16, 19, "25", "34", 48];
// // Do not edit the code above.

// /*
//   Write a function called addTen that is given 'numbers' as it's only argument.
//   Return a new array after adding ten to each item in numbers.
//   Your output should look like this -> [15, 19, 26, 29, 35, 44, 58]
// */

// //Code Here
// function addTen(numbers) {
//   newArr = numbers;
//   newerArr = [];
//   for (let i = 0; i < newArr.length; i++) {
//     newerArr.push(Number(newArr[i]) + 10);
//   }
//   return newerArr;
// }

// addTen(numbers);

// ////////// PROBLEM 11 //////////

// // Do not edit the code below.
// var num1 = Math.floor(Math.random() * 30);
// var num2 = Math.floor(Math.random() * 30);
// var arr1 = [];
// var arr2 = [];
// for (var i = 0; i < num1; i++) {
//   arr1.push(i);
// }
// for (var i = 0; i < num2; i++) {
//   arr2.push(i);
// }
// // Do not edit the code above.

// /*
//   Above is some code that adds a random number of values to both arr1 and arr2.
//   Write a function called 'longer' that is given arr1 and arr2 as it's only arguments.
//   Return the longer of the two arrays.
// */

// //Code Here
// function longer(arr1, arr2) {
//   if (arr1.length > arr2.length) {
//     return arr1;
//   } else {
//     return arr2;
//   }
// }

// /*
//   As a continuation of the previous problem, write another function called 'both'.
//   Your 'both' function will be given two arguments, arr1 and arr2 (from the previous example).
//   'both' should return a new array with the matching numbers found in both arr1 and arr2.

//   Example: var arr1 = [1,2,3,4]; var arr2 = [2,4,5,6]; newArray // [2,4]
// */

// //Code Here

// ////////// PROBLEM 12 //////////

// // Do not edit the code below.
// var devMountainEmployees = [];

// var joe = {
//   name: "Joe",
//   position: "Instructor",
//   spiritAnimal: "Honey Badger"
// };

// var cahlan = {
//   name: "Cahlan",
//   position: "CEO",
//   spiritAnimal: "butterfly"
// };

// var ryan = {
//   name: "Ryan",
//   position: "Marketing",
//   spiritAnimal: "fox"
// };

// var colt = {
//   name: "Colt",
//   position: "Everything really",
//   spiritAnimal: "Young Male Horse"
// };
// // Do not edit the code above.

// /*
//   Above you're given an empty array and four variables containing objects.
//   Fill the devMountainEmployees array with those four objects.
//   After that console.log the length of the Array and make sure that it's equal to 4.
// */

// //Code Here

// /*
//   Now let's say Cahlan has to take a leave of absence.
//   Loop through your devMountainEmployees until you find cahlan, then remove him from the array.
// */

// //Code Here

// ////////// PROBLEM 13 //////////

// /*
//   A very clean way to pass around large LISTS (arrays) of COLLECTIONS (objects) of data is to have an array full of objects.
//   Create an empty array called users.
// */

// //Code Here

// /*
//   Now add three user objects to your users array. Each user object should contain the following properties. name, email, password, username.

//   Include the following user1 object as one of the objects in your array.
// */

// // Do not edit the code below.
// var user1 = {
//   name: "Mark McIver",
//   email: "mark.mciver@devmounta.in",
//   password: "hunter2",
//   username: "ihazcode"
// };
// // Do not edit the code above.

// //Code Here

// /*
//   Now you have a very common data structure.
//   Twitter is a good use case.
//   It's easy to imagine that your followers list on Twitter is an array full of objects and those objects contain properties about the specific person you follow.

//   Now let's say that Mark decided to delete his account.
//   Loop through your array of objects until you find Mark's account (use his email, mark.mciver@devmounta.in, to find him).
//   Once you find the array index he's located in, delete him from the array.
// */

// //Code Here

// /*
//   The activity we just did is very much how data works in 'the real world'.
// */
// // // // js 2-2 // // //
