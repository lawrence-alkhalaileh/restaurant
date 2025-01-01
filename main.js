//  task 1 - question 1

const info = [];
const items = [];

let userName = prompt("Enter your Name please :");
const parentElement = document.getElementById('parentDiv');
const newParagraph = document.createElement('p');
newParagraph.textContent = userName;
parentElement.appendChild(newParagraph);

info.push(userName);
let Gender;

while (true) {
  Gender = prompt("Enter Your Gender please:");
  if (Gender === "male" || Gender === "female") {
    break;
  } else {
    alert("Invalid input. Please enter 'male' or 'female'.");
  }
}
if (Gender === "male") {
  items.push(Gender);
  info.push(Gender);
  alert(`Welcome, Mr. ${userName}!`);
} else if (Gender === "female") {
  info.push(Gender);
  items.push(Gender);
  alert(`Welcome, Ms. ${userName}!`);
}

let orderChoice = prompt("Would you like to order shawarma, zinger, or burger");

items.push(orderChoice);
info.push(orderChoice);
alert(`Your ${orderChoice} is being prepared.`);


  const orderedList = document.createElement('ol');


  for (let i = 0; i < items.length; i++) {
      const listItem = document.createElement('li'); // Create <li>
      listItem.textContent = items[i]; // Set the text of the list item
      orderedList.appendChild(listItem); // Add the <li> to the <ol>
  }

  document.getElementById('list-container').appendChild(orderedList);

for (let i = 0; i < info.length; i++) {

  console.log(info[i]);

}


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
