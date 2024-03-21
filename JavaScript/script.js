// var num1 = +prompt("Enter First Value To Compare .");
// var num2 = +prompt("Enter Second Value To Compare .");

// if (num1 > num2) {
//   document.write(
//     "The first value of intiger  " +
//       num1 +
//       " is grater then Second " +
//       num2 +
//       " . " +
//       "<br/>"
//   );
// } else if (num1 < num2) {
//   document.write(
//     "The first value of intiger  " +
//       num1 +
//       " is Less then Second " +
//       num2 +
//       " . " +
//       "<br/>"
//   );
// }

// if (num1 === num2) {
//   document.write(
//     "The first value of intiger  " +
//       num1 +
//       " is EQUAL to Second " +
//       num2 +
//       " . " +
//       "<br/>"
//   );
// }

// if (num1 < 0) {
//   document.write("The number " + num1 + " is " + "negative");
// } else if (num1 > 0) {
//   document.write("The number " + num1 + " is " + "Positive");
// }

// if (num1 === 0) {
//   document.write("The number " + num1 + " is " + "0");
// }

// var vowel = prompt("Enter An Vowel");

// var alphpbet =
//   "a" && "e" && "i" && "o" && "u" && "A" && "E" && "I" && "o" && "U";
// if (vowel == alphpbet) {
//   document.write("The is True!");
// } else if (vowel !== alphpbet) {
//   document.write("The is False!");
// }

// ChatGpt

// var vowel = prompt("Enter a vowel");
// var alphabet = "aeiouAEIOU";

// if (alphabet.includes(vowel)) {
//   document.write("The character is a vowel!");
// } else {
//   document.write("The character is not a vowel!");
// }

// var vowel = prompt("Enter An Vowel");

// // var alpha = "a" || "e";

// if (vowel === "a" || "e" || "o" || "u") {
//   document.write("thid is vowel");
// } else if (vowel !== "a" || "e" || "o" || "u") {
//   document.write("False");
// // }
// var time = +prompt("What is time?");
// var greeting = "Good day";

// if (time <= 12) {
//   document.write(greeting);
// } else document.write("Good Evening");

// Write a program to check whether the given input number is
// divisible by 3 or else show a message “Number is not divisible
// by 3”.
// var num1 = +prompt("Enter a number to check number is Divisible by '3' or not");

// // var num2=num1%

// if (num1 % 3 === 0) {
//   document.write("This number " + num1 + " is divisible by '3' .");
// } else {
//   document.write("This number " + num1 + " is not divisible by '3' .");
// }

// Write a program that checks whether the given input is an even
// number or an odd number./
// var num1 = +prompt("Enter a number to check number is divisible by 2 . ");
// if (num1 / 2 === 1) {
//   document.write("This number " + num1 + " is Even .");
// } else {
//   document.write("This number " + num1 + " is Odd .");
// }

// Write an if/else statement with the following condition:
// If the variable age is greater than 18, output "Old enough",
// otherwise output "Too young".
// var age = +prompt("What is your Age . ");
// if (age >= 18) {
//   alert("Old enough");
// } else {
//   alert("Too young");
// }

// Write a program that prompts the user for their name, and then
// displays a special greeting to that person if their name is the
// same as yours. If the name entered by the user is anything
// other than your name, your code should not produce any
// output.
// var name = prompt("What is Your name ? 'rashid'");

// if (name === "rashid") {
//   alert("Welcome");
// }

// Write a program to check whether the given input number is
// divisible by 3 or not by using Switch Case statements. Show a
// message “Number is not divisible by 3” or “Number is divisible
// by 3”.

// Write a program that takes a character(number or string) in a
// variable & checks whether the given input is a number,
// uppercase letter or lower case letter. (Hint: ASCII codes:-
// A=65, Z=90, a=97, z=122)
// var alph = prompt("Enter an Alphbet . ");

// var alph1 = alph.charCodeAt(0);
// if (alph1 >= 48 && alph1 <= 57) {
//   document.write(alph + " is a number" + "</br>");
// } else if (alph1 >= 65 && alph1 <= 90) {
//   document.write(alph + " is a UPPERCASE" + "</br>");
// }
// if (alph1 >= 97) {
//   document.write(alph + " is a lowercase" + "</br>");
// }

// function calculator() {
//   const number1 = parseFloat(prompt("Enter the first number:"));
//   const number2 = parseFloat(prompt("Enter the second number:"));
//   const operator = prompt("Enter the operator (+, -, *, /, %):");

//   let result;

//   switch (operator) {
//     case "+":
//       result = number1 + number2;
//       break;
//     case "-":
//       result = number1 - number2;
//       break;
//     case "*":
//       result = number1 * number2;
//       break;
//     case "/":
//       if (number2 !== 0) {
//         result = number1 / number2;
//       } else {
//         result = "Error: Division by zero!";
//       }
//       break;
//     case "%":
//       result = number1 % number2;
//       break;
//     default:
//       result = "Error: Invalid operator!";
//   }

//   document.write(`Result: ${result}`);
// }

// // Call the function to execute the calculator
// calculator();

// Write a program to create a calculator for +, -, *, /, % using
// switch case statements. (number1, number2 and operator will
// be input)

// var num1 = +prompt("Enter A First Number . ");
// var num2 = +prompt("Enter A Second Number . ");
// var oprator = prompt("Enter Oprator +, -. *, /, %. ");
// var div = num1 / num2;
// if (oprator === "+") {
//   document.write(
//     "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2)
//   );
// } else if (oprator === "-") {
//   document.write(
//     "The SUBTRACT of " + num1 + " and " + num2 + " is " + (num1 - num2)
//   );
// } else if (oprator === "*" || "x") {
//   document.write(
//     "The Multiplication of " + num1 + " and " + num2 + " is " + num1 * num2
//   );
// } else if (oprator === "/") {
//   document.write("The division of " + num1 + " and " + num2 + " is " + div);  errrerrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
// }
// if (condition) {
//   if (condition) {

//   }
// }
// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// if (operator === "+") {
//   document.write(
//     "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2)
//   );
// }

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// if (operator === "+") {
//   document.write(
//     "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2)
//   );
// } else if (operator === "-") {
//   document.write(
//     "The difference of " + num1 + " and " + num2 + " is " + (num1 - num2)
//   );
// } else if (operator === "*" || operator === "x") {
//   document.write(
//     "The multiplication of " + num1 + " and " + num2 + " is " + num1 * num2
//   );
// } else if (operator === "/") {
//   if (num2 !== 0) {
//     document.write(
//       "The division of " + num1 + " and " + num2 + " is " + num1 / num2
//     );
//   } else {
//     document.write("Error: Division by zero!");
//   }
// } else {
//   document.write("Invalid operator!");
// }

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// if (operator === "+") {
//   document.write(
//     "The sum of " + num1 + " and " + num2 + " is " + (num1 + num2)
//   );
// } else if (operator === "-") {
//   document.write(
//     "The difference of " + num1 + " and " + num2 + " is " + (num1 - num2)
//   );
// } else if (operator === "*" || operator === "x") {
//   document.write(
//     "The multiplication of " + num1 + " and " + num2 + " is " + num1 * num2
//   );
// } else if (operator === "/") {
//   // if (num2 !== 0) {
//     document.write(
//       "The division of " + num1 + " and " + num2 + " is " + num1 / num2
//     );
//   // }

//   // else {
//   //   document.write("Error: Division by zero!");
//   // }
// }

// // else {
// //   document.write("Invalid operator!");
// // }

// var num1 = +prompt("Enter the first number:");
// var num2 = +prompt("Enter the second number:");
// var operator = prompt("Enter the operator (+, -, *, /, %):");

// var add = num1 + num2;
// var diff = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// var mod = num1 % num2;

// if (operator === "+") {
//   alert("The sum of " + num1 + " and " + num2 + " is " + add);
// } else if (operator === "-") {
//   alert("The difference of " + num1 + " and " + num2 + " is " + diff);
// } else if (operator === "*" || operator === "x") {
//   alert("The multiplication of " + num1 + " and " + num2 + " is " + mul);
// } else if (operator === "/") {
//   alert("The division of " + num1 + " and " + num2 + " is " + div);
// } else if (operator === "%") {
//   alert("The remainder of " + num1 + " and " + num2 + " is " + mod);
// }

// Write a program that takes a calendar year in YYYY format in
// a variable. Check & notify the user whether it is a leap year or
// not.
// var yera = +prompt("Enter a year in a format of YYYY:");
// if (yera % 4 === 0) {
//   alert("This year " + yera + " is leap year!");
// }

// var year = +prompt("Enter a year in the format of YYYY:");

// if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//   alert("This year " + year + " is a leap year!");
// } else {
//   alert("This year " + year + " is not a leap year.");
// }

// Write a program that takes time as input from user in 24 hours
// clock format like: 1900 = 7pm. Implement the following case
// using if, else & else if statements

// var time = +prompt("Enter a time in format HHHH. ");

// if (time >= 1 && time < 1200) {
//   document.write("Good morning");
// } else if (time >= 1200 && time < 1700) {
//   document.write("Good afternoon");
// } else if (time >= 1700 && time < 2100) {
//   document.write("Good Evening.");
// } else if (time >= 2100 && time < 2359) {
//   document.write("Good night.");
// }

// var pwd = prompt("Enter a password");
// var password = "123qaz";
// if (pwd === "") {
//   alert("please enter a password.");
//   document.write("please enter a password.");
// } else if (pwd === password) {
//   alert("“Correct! The password you entered matches the original password”");
//   document.write(
//     "“Correct! The password you entered matches the original password”"
//   );
// } else if (pwd !== password) {
//   alert("“Incorrect password”");
//   document.write("“Incorrect password”");
// }

// // Storing correct password in a variable
// var correctPassword = "mySecretPassword";

// // Asking user to enter their password
// var userInput = prompt("Please enter your password:");

// // Validating the passwords
// if (!userInput) {
//   // Checking if the user has entered a password
//   alert("Please enter your password.");
// } else if (userInput === correctPassword) {
//   // Checking if both passwords are the same
//   alert("Correct! The password you entered matches the original password.");
// } else {
//   // If passwords are not the same
//   alert("Incorrect password.");
// }

// var num = +prompt("Enter character !");
// var num1 = typeof num;

// alert("the type " + num + " is " + num1);

// var num = +prompt("What is your score?");
// if (num >= 90) {
//   alert("your grade is A");
// }

// let students = ["Umair", "Anas", "Shoaib", "Rizwan"];

// console.log(students[2]);
// console.log(students[1]);

// let students = [];
// console.log(students);
// students[0] = "Ahmed";
// students[1] = "Umair";
// students[5] = "aslam";

// console.log(students[3]);

// let fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.length);
// console.log(fruits.indexOf("watermelon"));
// console.log(fruits.includes("watermelon"));

// Array.length
// Array.indexOf()
// Array.includes()

// var vowel = prompt("Enter a vowel.");

// let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

// // Prompting user for input
// const userInput = prompt("Enter a character to check if it's a vowel:");

// // Array of vowels
// const vowels = ['a', 'e', 'i', 'o', 'u'];

// // Checking if user input is a vowel using Array.includes()
// const isVowelIncludes = vowels.includes(userInput.toLowerCase());

// // Checking the index of user input in the array using Array.indexOf()
// const indexOfVowel = vowels.indexOf(userInput.toLowerCase());

// // Displaying results
// if (isVowelIncludes) {
//     console.log(`${userInput} is a vowel.`);
//     console.log(`Index of ${userInput} in the vowels array is ${indexOfVowel}.`);
// } else {
//     console.log(`${userInput} is not a vowel.`);
//     console.log(`Index of ${userInput} in the vowels array is ${indexOfVowel}.`);
// }

// let stu = ["aa", "bb.", "ff.", "gg", "tt"];
// console.log(stu[4]);

// let fruits = [
//   "0 banana",
//   "1 apple",
//   "2 grapes",
//   "3 chiko",
//   "4 mango",
//   "5 orange",
//   "6 gava",
//   "7 watermelon",
//   "8 melon",
//   "9 kiwi",
//   "10 anar",
// ];

// var fruitsN = fruits.slice(4, 5);
// console.log(fruitsN);
// fruits.splice(3, 10, "hen", "cow", "camel", "snake");
// console.log(fruits);
// let favFruits = fruits.slice(4, 9);
// document.write(favFruits);

// fruits.splice(1, 0, "Cow ", "goat");
// fruits.splice(3, 2);

// console.log(fruits);

// let fruits = ['apple', 'banana', 'oranges', "mango", "watermelon"];

// fruits.splice(1, 0, "Melons", 'Grapes');
// fruits.splice(3, 2);

// console.log(fruits)

// let siblings = ["Haider", "Abdullah", "Muzammil"];

// let primeNumbers = [1, 2, 3, 5, 7, 11, 13];

// let qualifications = [true, false, true, true, false, false, true, true, true, false];

// let mixxedArr = ["Haider", 3344, true, 'Ali', 3413, false, 3419974];

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// let mixedArr = arr1.concat(arr2, arr3, arr4);

// let mixedArr = arr1.concat(arr2).concat(arr3);

// let arr1 = [1, 2, 3, 4];
// let arr2 = [5, 6, 7, 8];

// let arr3 = [arr1, arr2, "haider"];
// console.log(arr3[1][3]);

// document.write("<h3>Qualifications:</h3>");
// let qualifications = [
//   "SSC",
//   "HSC",
//   "BCS",
//   "BS",
//   "BCOM",
//   "MS",
//   "M.Phil",
//   "Ph.D",
// ];
// let index = 0;
// document.write("<ol>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("</ol>");

// let cars = [];
// let userName = prompt("what is your name?");
// let mixxedArr = [true, 1, "haider", false, userName];

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = arr1.concat(arr2);
// console.log(arr3);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let arr3 = [[1, 2, 3], [4, 5, 6]];
// let arr3 = [arr1, arr2];
// console.log(arr3)

// document.write("<h3>Qualifications:</h3>");
// let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];
// let index = 0;

// document.write("<ol>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("<li>" + qualifications[index++] + "</li>");
// document.write("</ol>");

// let arr = [prompt(), prompt(), prompt()];

// arr[0] = prompt();
// arr[1] = prompt();

// var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Function to generate dropdown/select menu
// function generateDropdown() {
//   document.write('<label for="manufacturers">Select a Manufacturer:</label>');
//   document.write('<select id="manufacturers">');
//   for (var i = 0; i < manufacturers.length; i++) {
//     document.write(
//       '<option value="' +
//         manufacturers[i] +
//         '">' +
//         manufacturers[i] +
//         "</option>"
//     );
//   }
//   document.write("</select>");
// }

// // Call the function to generate the dropdown
// generateDropdown();

let empty = [];
console.log(empty);


