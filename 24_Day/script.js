const wordList = [
  "script",
  "october",
  "sunday",
  "workshop",
  "terminal",
  "index",
  "html",
  "code",
  "github",
  "extension",
  "rabbit",
];

setInterval(addWord, 2500);

function addWord() {
  let index = Math.floor(Math.random() * wordList.length);
  document.body.append(createSpan(wordList[index]));
}

function createSpan(word) {
  const span = document.createElement("span");
  span.innerHTML = word;
  span.id = word;
  let r = Math.random() * window.innerWidth;
  span.style.position = "absolute";
  span.style.right = r;

  let id = setInterval(drop, 50);
  span.iid = id;

  let top = 70;
  function drop() {
    top++;
    span.style.top = top;

    if (top > window.innerHeight - 60) {
      span.remove();
      clearInterval(id);
      // localStorage.setItem("score",score);
      alert("Game over. Your score is " + score);
      window.location.reload();
    }
  }

  return span;
}

let typedWord = "";
let score = 0;
let __typedWord = document.getElementById("__typedWord");
let __score = document.getElementById("__score");

document.onkeyup = function (e) {
  const invalidKeys = ["Escape", "Meta", "Alt", "Control", "Shift", "CapsLock"];
  if (invalidKeys.includes(e.key)) return;
  //

  if (e.key == " " || e.key === "Enter") {
    let elem = document.getElementById(typedWord);
    if (elem) {
      clearInterval(elem.iid);
      elem.remove();
      typedWord = "";
      __typedWord.innerHTML = typedWord;
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
  console.log("typeWord ", typedWord);
  console.log("score : ", score);
};

//
// 1. Drop Speed.
// 2. Highest Score. (LS).
// 3. Sound feature.
