//  task 1 - question 1

let info = [];

let name = prompt("Enter your name");

info.push(name);

let gender;

while (true) {
  gender = prompt("Enter gender");
  if (gender.toLowerCase() === "male" || gender.toLowerCase() === "female") {
    info.push(gender);
    break;
  } else {
    alert("try again!");
  }
}

if (gender.toLowerCase() == "male") {
  alert(`hello mr.${name}`);
} else if (gender.toLowerCase() == "female") {
  alert(`hello ms.${name}`);
} else {
  alert("hello there !");
}

let order = prompt("do you want shawarma, zinger, burger?");

if (order.toLowerCase() == "shawarma") {
  alert("preparing shawarma ...");
  info.push(order);
} else if (order.toLowerCase() == "zinger") {
  alert("preparing zinger ...");
  info.push(order);
} else if (order.toLowerCase() == "burger") {
  alert("preparing burger ...");
  info.push(order);
} else {
  alert("incorrect input, try again!");
}
console.log(info);


// console.log(`name: ${name}, order: ${order}`);

// task 1 - question 2

// let number = Number(prompt("enter number"));

// if (number === 1) {
//   console.log("one");
// } else if (number === 2) {
//   console.log("two");
// } else if (number === 3) {
//   console.log("three");
// } else if (number === 4) {
//   console.log("four");
// } else if (number === 5) {
//   console.log("five");
// } else if (number === 6) {
//   console.log("six");
// } else if (number === 7) {
//   console.log("seven");
// } else if (number === 8) {
//   console.log("eight");
// } else if (number === 9) {
//   console.log("nine");
// } else {
//   console.log("try again !");
// }

//  task 2 - question 1

// for (let i = 0; i <= 5; i++) {
//   alert(i);
// }

//  task 2 - question 2

// let numbers = "";dff
// for (let i = 0; i <= 5; i++) {
//   numbers += i + " ";
// }
// alert(numbers);

// //  task 2 - question 4

// let number = 0;
// while (true) {
//   number = Number(prompt("Enter number between 0 and 100"));
//   if (number <= 100 && number >= 0) {
//     break;
//   } else {
//     alert("try again!");
//   }
// }

// //  task 2 - question 5

// let x = Number(prompt("enter a number to display sum"));

// let sum = 0;

// for (let i = 0; i <= x; i++) {
//   sum += i;
// }

// alert(sum);
