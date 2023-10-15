const wordList = [
  "apple",
  "word",
  "script",
  "javascript",
  "workshop",
  "terminal",
  "output",
  "ports",
  "october",
];

setInterval(setWord, 2000);

function setWord() {
  let index = Math.floor(Math.random() * wordList.length);
  document.body.append(createSpan(wordList[index]));
}

function createSpan(word) {
  let span = document.createElement("span");
  span.innerText = word;
  span.id = word;
  span.style.position = "absolute";
  span.style.right = Math.random() * window.innerWidth;

  let intervalID = setInterval(drop, 50);
  span.intervalID = intervalID;
  let position = 100;
  function drop() {
    position++;
    span.style.top = position;

    if (position >= window.innerHeight - 100) {
      console.log("touched word", span.innerHTML);
      alert("Game over, your score is " + score);
      span.remove();
      clearInterval(intervalID);
      window.location.reload();
    }
  }

  return span;
}

let typedWord = "";
let score = 0;
let __typedWord = document.getElementById("__typedWord");
let __score = document.getElementById("__score");
const notAllowedKeys = ["Alt", "Control", "Meta", "Escape"];

document.onkeyup = function (e) {
  if (notAllowedKeys.includes(e.key)) return;
  if (e.key === " " || e.key === "Enter") {
    let elem = document.getElementById(typedWord);
    if (elem) {
      clearInterval(elem.intervalID);
      elem.remove();
      typedWord = "";
      __typedWord.innerHTML = "";
      score++;
      __score.innerHTML = score;
    }
  } else if (e.key === "Backspace") {
    typedWord = typedWord.substring(0, typedWord.length - 1);
    __typedWord.innerHTML = typedWord;
  } else {
    typedWord += e.key;
    __typedWord.innerHTML = typedWord;
  }
};
