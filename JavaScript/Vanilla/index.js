const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// // old way of iteration.
// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//// forEach
// companies.forEach(function(company){
//  console.log(company.name);
// });

// // filter
// let canDrink = []
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21){
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });


// get can drinks companies
const canDrink = ages.filter( age => age >= 21);

// get retail companies
const retailCompanies = companies.filter( company => company.category === 'Retail' );

// get 80's companies
const eightiesCompanies = companies.filter( company => (company.start >= 1980 && company.start < 1990) );

// companies that lasted more than 10 years
const lastTenYears = companies.filter( company => (company.end - company.start >= 10) );

//// map

// create array of company names
const companyNames = companies.map( company => company.name );

// create array of companies with start and end date
const testMap = companies.map( company => `${company.name} [${company.start} - ${company.end}]` );

// get square root of ages
const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * age);

// // sort
// const sortedCompanies = companies.sort(function(c1, c2) {
//   if(c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// sort ages
const sortAges = ages.sort((a, b) => b - a);


// // reduce
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]; 
// }

// const ageSum = ages.reduce(function(total, age) {
//   return total + age;
// }, 0);
const ageSum = ages.reduce((total, age) => total + age, 0);

// const factorial = (function(n) {
//   if (n < 0) 
//         return -1;
//   else if (n == 0) 
//       return 1;
//   else {
//       return (n * factorial(n - 1));
//   }
// });

// const factorial = n => n < 0 ? -1 : n == 0 ? 1 : n * factorial(n - 1);

// console.log(factorial(n));


const factorial = number => 
  //if number is less than 0 return -1
  number < 0 ? 
  -1 
  // else if number is equal to 0 return 1
  : number == 0 ? 
  1 
  // else return  number * factorial(number - 1)
  : number * factorial(number - 1);

// console.log(factorial(4));



// 1) Initialize two variables first and second to INT_MIN as,
//    first = second = INT_MIN
// 2) Start traversing the array,
//    a) If the current element in array say arr[i] is greater
//       than first. Then update first and second as,
//       second = first
//       first = arr[i]
//    b) If the current element is in between first and second,
//       then update second to store the value of current variable as
//       second = arr[i]
// 3) Return the value stored in second.

nums = [2, 3, 6, 6, 5, 10, 10, 11, 12,7, 4]


function getSecondLargest(nums) {
  nums.sort((a, b) => a - b);
  let n = [nums[0]];
  let secondLargest = []
  for(let i=1; i < nums.length; i++) {
    if(nums[i-1] !== nums[i]) {
      n.push(nums[i]);
      console.log(n);
    }
  }
  secondLargest.push(n[n.length-2]);
  return secondLargest.join();
}
console.log(getSecondLargest(nums));
