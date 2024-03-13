var num1 = +prompt("Enter First Value To Compare .");
var num2 = +prompt("Enter Second Value To Compare .");



if (num1 > num2) {
  document.write(
    "The first value of intiger  " +
      num1 +
      " is grater then Second " +
      num2 +
      " . " +
      "<br/>"
  );
} else if (num1 < num2) {
  document.write(
    "The first value of intiger  " +
      num1 +
      " is Less then Second " +
      num2 +
      " . " +
      "<br/>"
  );
}

if (num1 === num2) {
  document.write(
    "The first value of intiger  " +
      num1 +
      " is EQUAL to Second " +
      num2 +
      " . " +
      "<br/>"
  );
}
