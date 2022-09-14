// ODD - EVEN STRING SORT 
function sortMyString(S) {
    // your code here
    let even = S.split("").filter((letter, i) => i % 2 === 0).join("")
    let odd = S.split("").filter((letter, i) => i % 2 !== 0).join("")
    return even + " " + odd
  
};

