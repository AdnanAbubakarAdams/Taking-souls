// Write a function findWordFrequency that takes a sentence (a string), and returns an object with each word as a key, with a value of how many times that word appears in a the sentence

// Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo
const findWordFrequency = (str) => {
    let stringSplit = str.split(" ");
    let wordHash = {};

    for(let i = 0; i < stringSplit.length; i++) {

        let word = stringSplit[i];
        
        if (word in wordHash) {
            wordHash[word] ++;
        } else {
            wordHash[word] = 1;
        }
    }

    return wordHash;
}
console.log(findWordFrequency("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"));