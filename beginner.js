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
  }