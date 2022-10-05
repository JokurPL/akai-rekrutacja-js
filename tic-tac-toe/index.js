let turn = "x";
let symbols = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

// 0: ['',  1:['x', 2:['',
//     'o',   '',      '',
//     '']    '']      '']

// 20 11 02

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const tilesE = document.querySelectorAll(".tile");

board.addEventListener("click", ({ target }) => {
  const classes = Array.from(target.classList);
  if (classes.includes("tile") && classes.length !== 1) return;

  const idx = tiles.indexOf(target);

  target.classList.add(`tile-${turn}`);
  symbols[idx % 3][Math.floor(idx / 3)] = turn;
  turn = turn === "x" ? "o" : "x";

  displayTurn(turn);

  checkWin(turn);
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura
  const h1 = document.querySelector(".turn");
  h1.innerText = `${String(turn).toUpperCase()} turn`;
}

function checkWin(turn) {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")

  let score1 = 0;
  let score2 = 0;
  let score3 = 0;

  let score4 = 0;
  let score5 = 0;

  for (let i = 0; i < 3; i++) {
    if (symbols[i].filter((symbol) => symbol == turn).length === 3) {
      alert(`${String(turn).toUpperCase()} won`);
      reset();
      break;
    }
    if (symbols[i][0] === turn) score1++;
    if (score1 === 3) {
      alert(`${String(turn).toUpperCase()} won`);
      reset();
      break;
    }

    if (symbols[i][1] === turn) score2++;
    if (score2 === 3) {
      alert(`${String(turn).toUpperCase()} won`);
      reset();
      break;
    }

    if (symbols[i][2] === turn) score3++;
    if (score3 === 3) {
      alert(`${String(turn).toUpperCase()} won`);
      reset();
      break;
    }

    if (symbols[i][i] === turn) score4++;
    if (score4 === 3) {
      alert(`${String(turn).toUpperCase()} won`);
      reset();
      break;
    }
  }

  if (symbols[2][0] === turn) score5++;
  if (symbols[1][1] === turn) score5++;
  if (symbols[0][2] === turn) score5++;
  if (score5 === 3) {
    alert(`${String(turn).toUpperCase()} won`);
    reset();
  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset
function reset() {
  // 4. zresetuj stan gry
  turn = "x";
  symbols = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const tilesX = [...document.querySelectorAll(".tile-x")];
  const tilesO = [...document.querySelectorAll(".tile-o")];

  if (tilesX.length !== 0) {
    tilesX.map((tile) => tile.classList.remove("tile-x"));
  }
  if (tilesO.length !== 0) {
    tilesO.map((tile) => tile.classList.remove("tile-o"));
  }

  alert("Reset");
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);
