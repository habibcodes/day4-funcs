// functions //

// declaration vs expresison

// // declaration
// function someFunc() {
//   // doSomething
//   // hoisted to the top
//   // can break code if similar names used
// }

// // expressions are preferred
// // and their various syntaxes,
// // like const arr = () => {}
// const someFunc2 = func() {
//   // doSomething
// };

// const arrowFunc = (a,b,c) => 5

// const multiLineArrowFunc = () => {
//   // multi-line code block
//   return;
// }

// // why do we use variables to assign funcs?
// const countHowManyPotatoes = function(list) {
//   // prepare counter, set to 0
//   let counter = 0;
//   // list the elements
//   for (const item of list){
//     // if an element is a potato, then
//     if (item === 'potato'){
//       // increment by one
//       counter++
//     }
//   }
//   // return the counter value
//   return counter;
// }

// const countHowManySomething = function(list, something) {
//   // prepare counter, set to 0
//   let counter = 0;
//   // list the elements
//   for (const item of list){
//     // if an element is a potato, then
//     if (item === something){
//       // increment by one
//       counter++
//     }
//   }
//   // return the counter value
//   return counter;
// }

// const list = ['potatoe', 'apple', 'carrot']
// console.log(countHowManyPotatoes(list));

// why do we use functions?

// const listItemsInFridge = (fridge, action) => {
//   // if empty fridge, yell "what the hell"
//   if (!fridge.length) {
//     // don't use === 0 as it is falsey/same with falsy
//     console.log('What the hell!');
//   }
//   // list every item in the fridge
//   for (const element of fridge) {
//     // console.log(`There is ${element} in the fridge`);
//     action(element);
//   }
//   // console.log a lowercase strin go f the fridge el in form of "There is x"
// };

// const rudeTelling = (item) => console.log(item);
// const tellTheRoomie = (item) => console.log(`There is ${item} in the fridge`);
// const yellTheRoomie = (item) => {
//   let message = `There is ${item} in the fridge`;
//   console.log(message.toUpperCase());
// };
// const francisFridge = ['pizza', 'ramen', 'fire', 'cake', 'taco'];

// listItemsInFridge(francisFridge, tellTheRoomie);
// listItemsInFridge(francisFridge, yellTheRoomie);

// callbacks

const complexerPantry = [
  {
    category: 'can',
    name: 'tuna',
    quantity: 1,
  },

  {
    category: 'can',
    name: 'corn',
    quantity: 1,
  },
  {
    category: 'can',
    name: 'burger',
    quantity: 2,
  },
  {
    category: 'box',
    name: 'baking soda',
    quantity: 2,
  },
  {
    category: 'jar',
    name: 'jam',
    quantity: 3,
  },
  {
    category: 'box',
    name: 'chocolate chips',
    quantity: 4,
  },
];

// make condition

const filterItemByQuantity = (foodItem, quantity) =>
  foodItem.quantity > quantity;

const organisePantry = (pantry, conditionCallBack) => {
  // go over every item in the pantry
  // and create a new array containing the acceptable values
  // define a structure (array)
  const filteredList = [];
  // iterate over every element
  for (const foodItem in pantry) {
    // if the category of an element is category, add it to the array
    // how do we access the pantry "key"????
    if (conditionCallBack()) {
      filteredList.push(foodItem);
    }
  }
  return filteredList;
};

// const result = organisePantry(complexerPantry, 'can');
const result = organisePantry(complexerPantry, 'box');

console.log(result);

// recursive example

/* //don't run below
const darkMagic = () => {
  if(true){
    darkMagic
  }
}

*/

//

const superCoolObjectDotKeysYeah = (someObject) => {
  // buffer
  const keys = [];

  // how can we access keys of an object without using object.keys?
  for (const key in someObject) {
    keys.push();
  }
  return keys;
};
