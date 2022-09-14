// CONSECUTIVE VOWEL STRINGS RETURN AN INTEGER
function getTheVowels(word) {
    let vowels = "aeiou",
    result = 0,
    vIndex = 0
    for (let i = 0; i < word.length; i++) {
      if(word[i] == vowels[vIndex]) {
        result++
        // condition to return the vowels index to 0 when it gets to 'u'
        if(vIndex == 4) {
          vIndex = 0
        } else {
          vIndex++
        }
      }
    }
    return result;
  };

  // PERSONALISING SPAMMY MARKETING EMAILS 
  function personalise( campaign, person){
    // ...
  //   return `Hello ${person.name}, how is the weather in ${person.city} today?, We wanted to let you know that ${person.favourite_products} are on sale today only!`
    
  // The replace() method returns a new string with one, some, or all matches of a pattern replaced by a replacement...synthax replace(pattern, replacement)// /g means do a global search of the variables <NAME> , <CITY> ...
    return  campaign.replace(/<NAME>/g,person.name)
   .replace(/<CITY>/g,person.city).replace(/<FAVOURITE PRODUCTS>/g,person.favourite_products);
  };

  // TWICE AS OLD 
  function twiceAsOld(dadYearsOld, sonYearsOld) {
  
    let birthYear = dadYearsOld - sonYearsOld;
    let twiceAsOld = birthYear * 2
    if (dadYearsOld >= twiceAsOld) {
      return dadYearsOld - twiceAsOld;
    } else {
      return twiceAsOld - dadYearsOld;
    }
  };

  // OBJECT ORIENTED PIRACY DETERMINING IF A SHIP IS WORTH LOOTING
  function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
     
     // this is how you determine if the ship is worth looting
    this.isWorthIt = function () {
          return  (this.draft - this.crew * 1.5 > 20);
           }
     
   };

   // CONVERT HASH TO AN ARRAY IN ALPHABETICAL ORDER
   function convertHashToArray(hash){
    //your code here - sort the keys!
    console.log(hash)
    // declaring vars (Object is a reserved word)
    let obj = Object;
    let newArray = []
    let key = obj.keys(hash)
    let value = obj.values(hash)
    // Doing a for in loop of the values
    for (let i in value) {
      // pushing the key value pair into the new array
      newArray.push([key[i], value[i]]);
    }
    // sorting the new array alphabetically
    return newArray.sort((a, b) => a[0] > b[0]);
  };


  // IS DIVISIBLE BY X AND Y 8KATA CODEWARS
  function isDivisible(n, x, y) {
    //   if (n % x == 0 && n % y == 0) {
    //     return true;
    //   }
    //   else  {
    //     return false;
    //   }
      return n % x == 0 && n % y == 0 ? true : false
    };

    // N-TH POWER 
    function index(array, n){
        //your code here
      //   if (array.length <= n) {
      //     return -1;
      //   } else {
      //     Math.pow(array[n])
      //   }
        // synthax Math.pow(base, exponent)
        return (array.length <= n) ? -1 : Math.pow(array[n], n) 
      }
   