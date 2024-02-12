function firstWord(s) {
  // your code here
 
  if (s === null) {
    return s;
  }
 
  const arr = [];
  arr.push(s.charAt(0));
 
  for (let i = 1; i < s.length; i++) {
    if (s.charAt(i) === " ") {
      return arr.join("").trim();
    }
    arr.push(s.charAt(i));
  }
 
  return arr.join("").trim();
}
 
// Do not change the code below
 
const s = prompt("Enter String:");
alert(firstWord(s));