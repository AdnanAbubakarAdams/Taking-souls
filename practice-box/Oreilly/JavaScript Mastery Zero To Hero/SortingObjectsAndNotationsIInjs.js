
// Course Notes:
document.getElementById("lesson").innerHTML = `
Reduce is a method that can be difficult to understand especially with all the vague
explanations that can be found on the web. There are many benefits to understanding reduce
as it is often used in state management (think Redux).

Reduce is actually a loop - but its a loop with memory built in - recall 
basic arithmetic: we sum numbers up from left to right. 1 + 2 + 3 = 6

arr.reduce(callback, initialValue)
`;

// Code Examples:
let nums = [1,2,3,4];
let addAll = nums.reduce((accumlator, currentItem) => accumlator + currentItem)
console.log('exampleReduce:', addAll);

const orders = [
  {id: 1, total: 12},
  {id: 2, total: 22},
  {id: 3, total: 32}
];

let grandTotalForOrders = 0;
for(let i = 0; i < orders.length; i++) {
  grandTotalForOrders += orders[i]['total'];
}; 
console.log('regularLoop:', grandTotalForOrders)

let grandTotalForOrdersII = orders.reduce((acc, curr) => acc + curr.total, 0)
console.log('orderTotal:', grandTotalForOrdersII)
// Exercise
document.getElementById("exercise").innerHTML = `

`;
 
// Exercise Solution:
