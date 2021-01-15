const board = document.getElementById("board");
const start = document.getElementById("start");
const reset = document.getElementById("reset");
const counterDiv = document.getElementById("counter");
allSquares = [];
let mainCounter = 0;

const N = 8;

const matrix = [
  [1, 60, 39, 34, 31, 18, 9, 64],
  [38, 35, 32, 61, 10, 63, 30, 17],
  [59, 2, 37, 40, 33, 28, 19, 8],
  [36, 49, 42, 27, 62, 11, 16, 29],
  [43, 58, 3, 50, 41, 24, 7, 20],
  [48, 51, 46, 55, 26, 21, 12, 15],
  [57, 44, 53, 4, 23, 14, 25, 6],
  [52, 47, 56, 45, 54, 5, 22, 13],
];

function convertToArray(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }

  return newArr;
}

const tour = convertToArray(matrix);

function delay(delayInms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}

function createBoard(N) {
  for (let i = 0; i < N; ++i) {
    for (let j = 0; j < N; j++) {
      let el = document.createElement("div");
      el.classList.add("square");
      if ((i - j) % 2 === 0) {
        el.classList.add("white");
      } else {
        el.classList.add("black");
      }
      board.appendChild(el);
      allSquares.push(el);
    }
  }
}

createBoard(N);

let timerId;

async function visualizeKnightTour() {
  let counter = 0;
  let index = 0;
  mainCounter = 0;

  for (let i = 0; i < 64; i++) {
    counter += 1;
    mainCounter += 1;
    index = tour.indexOf(counter);
    timerId = await delay(1000);
    allSquares[index].classList.add("light");
    allSquares[index].innerText = "♞";
    if (mainCounter < 65) {
      counterDiv.innerText = mainCounter;
    } else {
      mainCounter = 0;
    }
  }
}

async function resetTour() {
  //   board.innerHTML = "";
  //   allSquares = [];
  //   createBoard(N);
  location.reload();
}

start.addEventListener("click", visualizeKnightTour);
reset.addEventListener("click", resetTour);
