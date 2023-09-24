
// Course Notes:
document.getElementById("lesson").innerHTML = `

`;

// Code Examples:


// Exercise
document.getElementById("exercise").innerHTML = `
const mlATests = [
  {case_test: "Robot Takeover", pass: true},
  {case_test: "AI in The Fridge", pass: false},
  {case_test: "the Computers are winning", pass: true},
  {case_test: "Model Prediction 21", pass: true}
]
`;
 
// Exercise Solution:
const mlTests = [
  {case_test: "Robot Takeover", pass: true},
  {case_test: "AI in The Fridge", pass: false},
  {case_test: "the Computers are winning", pass: true},
  {case_test: "Model Prediction 21", pass: true}
];

const passAllTests = (testContainer, _pass, cases) => {
  let caseFail = '';
  for (let item in testContainer) {
    if (!testContainer[item][_pass]) {
      caseFail = testContainer[item][cases];
      return 'Test Failing Please check: '.concat(caseFail);
    }
  }

  return `All ${testContainer.length} tests passing :)`
}
console.log('writingTest:', passAllTests(mlTests, "pass", "case_test"))

const passAllTests2 = (testContainer, _pass, cases) => {
  let caseFail = '';
  let counter = 0;
  for (let item in testContainer) {
    if (testContainer[item][_pass]) {
      counter++;
    } else {
      caseFail = testContainer[item][cases];
    }
  }

  if(counter === testContainer.length) {
    return `All ${testContainer.length} tests passing :)`
  } else {
    return  'Test Failing Please check: '.concat(caseFail);
  }
}; 
console.log('testWriting: 2', passAllTests2(mlTests, "pass", "case_test"))