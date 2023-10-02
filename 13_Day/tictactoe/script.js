let currentPlayer, win, draw, winningPlayer;
const cells = document.querySelectorAll(".cell");
// let randomIndex = ;
// let players = ;

function setup() {
  currentPlayer = ["X", "O"][Math.floor(Math.random() * 2)];
  win = false;
  draw = false;
  winningPlayer = null;

  cells.forEach((cell, index) => {
    cell.innerHTML = "";
    cell.addEventListener("click", handleClick, {
      once: true,
    });
  });
}

setup();

//....

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", setup);

function handleClick() {
  this.innerHTML = currentPlayer;
  checkWin();
  if (win) alert("Won by " + winningPlayer);
  else if (!win && draw) alert("Draw ");

  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

const winningPatterns = [
  // Row
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // Column
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // Diagonal
  [0, 4, 8],
  [2, 4, 6],
];

function checkWin() {
  // let data = [].fill("");
  let data = ["", "", "", "", "", "",""];

  cells.forEach((cell) => {
    data.push(cell.innerText);
  });

  winningPatterns.forEach((pattern) => {
    const [a, b, c] = pattern;

    if (data[a] && data[b] && data[c]) {
      if (data[a] === data[b] && data[b] === data[c]) {
        win = true;
        winningPlayer = currentPlayer;
        return;
      }
    }
  });

  if (!data.includes("")) {
    draw = true;
    return;
  }
}
