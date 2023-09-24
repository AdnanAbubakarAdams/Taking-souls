
// Course Notes:
document.getElementById("lesson").innerHTML = `
Object Constructors in Javascript
Sometimes we need a blueprint for creating many objects of the same type 
The way to create an object type, is to use an object constructor function.

The THIS key word in javascript is the object that owns the code
`;

// Code Examples:
// creating an object constructor function
function Cyborg(first, last, _age, _eyes, _invisibilityMode) {
this.firstName = first;
this.lastName = last;
this.age = _age;
this.eye = _eyes;
this.invisibilityMode = _invisibilityMode;
};
console.log('creationOfObjectsWithConstructors:', 
new Cyborg('Adnan', 'Rondo', '32', 'black', true),
new Cyborg('Sharif', 'Rondo', '31', 'black', true),
new Cyborg('Baba', 'Rondo', '30', 'black', true),
new Cyborg('Danjuma', 'Rondo', '31', 'brown', true)
)


// Exercise
document.getElementById("exercise").innerHTML = `
Exercise: Uber Eats Payment Database
You are building a CMS frontend payment database for Uber Eats.
The higherups ask you to build an object constructor to generate user object data
called userGenerator.
1. The blueprint of the object should have keys for full name (first and last),
location, and billing. The data should include an entire name
(first name and last name), address, and billing information.
2. Create three new user objects with the following string information
(full name, location, billing):
user1: Lisa Simpson, Carribeans, Mastercard
user2: Michael Jordan, Chicago, Visa
user3: Bunny Foofoo, Canada, null
user4: The Dude, LA, Ethereum
`;
 
// Exercise Solution:
function UserGenerator(_fullname, _location, _billing) {
this.fullName = _fullname;
this.location = _location;
this.billing = _billing;
};

console.log('uberEatsUsersMine:', 
new UserGenerator('Lisa Simpson', 'Carribeans', 'Mastercard'),
new UserGenerator('Michael Jordan', 'Chicago', 'Visa'),
new UserGenerator('Bunny Foofoo', 'Canada', null),
new UserGenerator('The Dude', 'LA', 'Ethereum')
)

let totalNewUsers = [];
let payingUserDatabase = [];
let usersWithValidPayments = 0;
// let 
function UserGenerator2(_fullname, _location, _billing) {
this.fullName = _fullname;
this.location = _location;
this.billing = _billing;
};
console.log(new UserGenerator2('Lisa Simpson', 'Carribeans', 'Mastercard'))

function createANewUser(_name, _location, _billing) {
totalNewUsers.push(new UserGenerator2(_name, _location, _billing));
addNewPaymentUsers()
};
createANewUser('Lisa Simpson', 'Carribeans', 'Mastercard');
createANewUser('Michael Jordan', 'Chicago', 'Visa');
createANewUser('Bunny Foofoo', 'Canada', null);
createANewUser('The Dude', 'LA', 'Ethereum');

function addNewPaymentUsers() {
  let newObjData = {};
  for (let i = 0; i < totalNewUsers.length; i++) {
    newObjData.fullName = totalNewUsers[i].fullName;
    newObjData.location = totalNewUsers[i].location;
    newObjData.billing = totalNewUsers[i].billing;
  }
  let acceptedBilling = newObjData.billing;
  if (acceptedBilling) {
    if (acceptedBilling === "Ethereum" || acceptedBilling === "Visa") {
      payingUserDatabase.push(newObjData);
      usersWithValidPayments++;
    }
  }
  return payingUserDatabase;
}

console.log('theTotalNewUsers', totalNewUsers);
console.log('storingIntoDatabase', payingUserDatabase);

console.log('exeerciseSolution: => ', `Total new users are ${totalNewUsers.length} of which ${usersWithValidPayments} users have valid payment methods.`,payingUserDatabase)
