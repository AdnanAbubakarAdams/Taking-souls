
// Course Notes:
document.getElementById("lesson").innerHTML = `
A very usseful tool when it comes to groupping orderd information by specific
values is the filter method in JAVASCRIPT

The fffilter method creates a new array with all the elements that passs the test
implemented by the provided functions
`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
You are moved into the basement of a companv and asked to do some data entrv work
Yikes.
Since you have coding skills, you decide to write some algorithms instead to do the
work for you so you can get out of the basement and get an office with a window and
a view.
I. Given the following array containing objects of employee information:
employees =[
{name:"Tony Stark", department:"Accounting"},
{name:"Peter Parker", department:"Sushi Chef"},
{name:"Bruce Wavne", department:"Accounting"},
{name:"Clark Kent",department:"Mail Room"}
];
1. Write a function called groupingObjectsByValues which takes two arrays as arguments
data and department

2. The function must check through all the employee information in the data argument
and return into a new global array all the object data of only the accountant employees
including their name and department information.

3. call and log the groupingObjectsByValues passing in employees array as the first argument

`;
 
// Exercise Solution:
let employees =[
  {name:"Tony Stark", department:"Accounting"},
  {name:"Peter Parker", department:"Sushi Chef"},
  {name:"Bruce Wavne", department:"Accounting"},
  {name:"Clark Kent",department:"Mail Room"}
  ];

const groupingObjectsByValues = (data, department) => {
return data.filter((element) => element.department === 'Accounting');
// return data.filter((element, dep) => dep[element] === department);
};
console.log('theWantedData:', groupingObjectsByValues(employees))

// using call backs
const groupingObjectsByValues2 = (data, department) => {
  let objValues = Object.values(department);
  console.log(objValues);
  
  const accountantArr = []
function runDepartemtTest(obj) {
  for (let i = 0; i < objValues.length; i++) {
    if(Object.values(obj).indexOf(objValues[i]) > - 1) {
      return accountantArr.push(obj);
    }
  }
  return false;
}

return data.filter(runDepartemtTest);
};
// console.log('here',accountantArr)
console.log('usingCallBacks:', groupingObjectsByValues2(employees, {department: 'Accounting'}))