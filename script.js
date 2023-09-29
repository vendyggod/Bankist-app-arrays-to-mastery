'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Functionallity

const displayMovements = movements => {
  containerMovements.innerHTML = '';

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(movements);

const createUsernames = accs => {
  accs.forEach(acc => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsernames(accounts);

const calcDisplayBalance = movements => {
  const balance = movements.reduce((summ, mov) => summ + mov, 0);
  labelBalance.textContent = `${balance}€`;
};

calcDisplayBalance(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

// Map, filter, reduce
// Map возвращает новый массив когда коллбек-функция отработала с элементами оригинала

// const eurToUsd = 1.1;
// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD);

// const movementsDescription = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );

// console.log(movementsDescription);

// const deposits = movements.filter(mov => mov > 0);
// const withdrawals = movements.filter(mov => mov < 0);
// const balance = movements.reduce((summ, mov) => summ + mov, 0);
// .reduce(accumulator, current element, index, array) 0 в качестве второго аргумента - это стартовая позиция счётчика

// Maximum value of the array
const maxValue = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(maxValue);

// const depositsFor = [];
// // for (const mov of movements) if (mov > 0) depositsFor.push(); для сравнения как бы for loop

// console.log(deposits, withdrawals, balance);

// Концептуальное различие forEach от for-of цикла в том, что в forEach нет break. Невозможно остановить цикл, коллбек функция будет выполняться
// на каждый элемент массива
// movements.forEach(function (mov, i, arr) {
//   mov > 0
//     ? console.log(`Movement ${i + 1}: you deposited ${mov} `)
//     : console.log(`Movement ${i + 1}: you withdrew ${Math.abs(mov)}`); // Math.abs убирает знак отрицания
// });

/////////////////////////////////////////////////

// Coding challenge

// const checkDogs = (dogsJulia, dogsKate) => {
//   const dogsJuliaCopy = dogsJulia.slice();
//   dogsJuliaCopy.splice(0, 1);
//   dogsJuliaCopy.splice(-2);
//   const dogsOnly = dogsJuliaCopy.concat(dogsKate);

//   dogsOnly.forEach((dog, i) => {
//     const age = dog >= 3 ? 'an adult' : 'a puppy';
//     console.log(`Dog number ${i + 1} is ${age}, and is ${dog} years old.`)
//   })
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// const calcAverageHumanAge = ages => {
//   const humanAges = ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   return humanAges;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// const summ = arr => {
//   const arrCopy = arr.slice().sort();
//   const arrUnique = [];

//   for (let i = 0; i < arrCopy.length; i++) {
//     if (arrCopy[i] !== arrCopy[i - 1] && arrCopy[i] !== arrCopy[i + 1])
//       arrUnique.push(arrCopy[i]);
//   }
//   return arrUnique.reduce((acc, num) => acc + num, 0);
// };

// console.log(summ([6, 3, 4, 3, 3, 4, 4, 6, 3, 4, 6])); // = > 10
// console.log(summ([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));

// const summ2 = arr => {
//   return arr
//     .filter(num => arr.indexOf(num) === arr.lastIndexOf(num))
//     .reduce((acc, num) => acc + num, 0);
// };

// console.log(summ2([6, 3, 4, 3, 3, 4, 4, 6, 3, 4, 6])); // = > 10
// console.log(summ2([5, 6, 10, 3, 10, 10, 6, 7, 0, 9, 1, 1, 6, 3, 1]));

// function secondLargest(array) {
//   const arrCopy =
//     typeof array === 'object'
//       ? [...new Set(array)].filter(el => typeof el === 'number' || 0).sort()
//       : undefined;
//   console.log(arrCopy);
//   return arrCopy && arrCopy.length > 1
//     ? Number(arrCopy.slice(-2)[0])
//     : undefined;
// }

// console.log(secondLargest([-32, 11, 43, 55, 0, 11]));
// console.log(secondLargest(['-1', 2, null, false]));
// console.log(secondLargest([2, true, 0]));
// console.log(secondLargest('32 11 44 56'));
// console.log(secondLargest([0, 1, '2', 3]));

// Test.assertEquals(secondLargest([-32,11,43,55,0,11]), 43);
// Test.assertEquals(secondLargest(null), undefined);
// Test.assertEquals(secondLargest([5,5,5,5,5,5]), undefined);
// Test.assertEquals(secondLargest([0, 1, '2', 3]), 2);
// Test.assertEquals(secondLargest(['-1', 2, null, false]), -1);

console.log(typeof [2, 3, '2']);
