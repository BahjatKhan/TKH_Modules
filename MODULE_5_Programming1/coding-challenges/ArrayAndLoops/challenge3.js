//https://codepen.io/bahjat_khan/pen/XWRYmqv?editors=1112
let quote =
  "Wipe the sweat off my dome, spit the phlegm on the streets Suede Timbs on my feets makes my cipher complete Whether cruising in a Sikh's cab, or Montero Jeep I can't call it, the beats make me falling asleep I keep falling, but never falling six feet deep I'm out for presidents to represent me, I'm out for presidents to represent me, I'm out for dead presidents to represent me, ";

let str = quote.split(" ");
let arr = [];

str.forEach(function (word, idx) {
  // console.log(s);
  //console.log(idx);
  let finalWord = word.toLowerCase();
  // console.log(finalWord);
  if (finalWord[0] === "s") {
    const finalResult = finalWord.replace("s", "$$");
    arr.push(finalResult);
  } else {
    arr.push(finalWord);
  }
});

const result = arr.join(" ");
console.log(result);
//console.log(arr)
