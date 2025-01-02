//  task 1 - question 1

document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  let userName = document.getElementById("username").value;
  let orderType = document.querySelector(
    'input[name="orderType"]:checked'
  ).value;
  let combo = document.querySelector('input[name="order-type"]:checked').value;

  let results = document.getElementById("results");
  results.textContent = ` Hey ${userName}, your order ${orderType} - ${combo} is being prepared`;
});

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
