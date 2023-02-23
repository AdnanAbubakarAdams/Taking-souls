// VALID PARENTHESIS CODEWARS
function validParentheses(parens) {
    let hashMap = {
      "(" : ")",
      "{" : "}",
      "[" : "]"
    }
    let stack = [];
        for(let i = 0; i < parens.length; i++) {
          if (parens[i] in hashMap) {
            stack.push(hashMap[parens[i]])
          } else if (stack.length > 0 && stack[stack.length -1] === parens[i]) {
            stack.pop()
          } else {
            return false;
          }
        }
    return !stack.length;
  }