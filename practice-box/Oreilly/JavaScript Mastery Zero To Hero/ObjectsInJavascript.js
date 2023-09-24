
// Course Notes:
document.getElementById("lesson").innerHTML = `
In javascript an object is a standalone entity, with properties and types.
Compare it with a car, for example. A car is an object, with properties. 
A car has a color, design, engine, a material its is made of, etc
the same way, javascript objects can have properties which define their 
characteristics.

Objects can be nested within other objects, and we can access them similarly with 
dot notation or bracket notation in order to modify the objects property values.


checking object properties in javascript
we can use the hasOwnProperty method in javascript to check whether a property
exists in an object. hasOwnProperty will return a value of true iff it exist and false
if it does not.
`;

// Code Examples:
const instagramUser = {
  handle: "@energy_Gad",
  photos: ['fish', 'lamboghini', 'family'],
  businessAccount: true
};
console.log('example1:', instagramUser);



// we can add properties with bracket or dot notation
instagramUser.location = 'Bronx New York';
instagramUser['followers'] = 3000;

//  Modifying and accessing nested objects
let deepObject = {
  id: 3454554,
  amount: 10,
  time: new Date(),
  geolocation: {
    city: 'Accra',
    country: 'Ghana'
  }
};
deepObject.geolocation.city = 'New York'
deepObject['geolocation']['country'] = 'USA'
console.log('deepObject:', deepObject)

// check whether a property exists
const restaurant = {
  salad: 'romaine',
  burgers: true
};
console.log('restaurant:', restaurant.hasOwnProperty('burgers'));

// Exercise
document.getElementById("exercise").innerHTML = `
Build an Uber app customer javascript object datatable.
1. Write an object called uberCustomer
2. The object needs to take a minimum of 5 properties with values.
3. The properties and values can be whatever you think would be most appropriate
as long as the values are not blank.
4. At least two of the properties and values should be added with either bracket
or dot notation.
5. Share your solution with the discord community!

2.
You work at a medical company and you've been getting this weird bug
where the data property 'fever', of whether a patient has a fever
has been oddly and mistakenly replaced with the property
'shoes'
cost medicalData = {
perscriptions: true.
weight: 156,
height: 508,
shoes: false
}:
Your boss says he spoke with the doctors and you need to fix this confusing information
ASAP so as not to distract the doctors from their hard work.
1. Write a function cleanUp which will check whether an object contains the property
shoes and delete it if it does. Additionally, create and assign the value of the
property shoes to a new property fever.
2. Log out the solution and share it with the discord! :)
The medical community is counting on you! ;) Good luck.
`;
 
// Exercise Solution:

const uberCustomer = {
  firstName: 'Adnan',
  LastName: 'Abubakar',
  Age: '30'

};
uberCustomer.paymentMethod = 'DebitCard';
uberCustomer['location'] = 'Carlifornia';
uberCustomer.totalRides = 190;
uberCustomer['Rating'] = 5.0;
console.log('exercise:', uberCustomer)


const medicalData = {
  perscriptions: true,
  weight: 156,
  height: 508,
  shoes: false
  };

const cleanUp = (medicalObj) => {

  if (medicalObj.hasOwnProperty('shoes')) {
    medicalObj.fever = medicalObj.shoes
    delete medicalObj.shoes;
  } else {
    return "shoes is not a property in medicalData"
  }

return medicalData;
}
console.log('medicalData:', cleanUp(medicalData));

