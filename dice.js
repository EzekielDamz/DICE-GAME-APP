let inPut;
let winningscore;
let totalDice;
let lastDice;
init();

const rollDice = document.querySelector(".btn-roll");

rollDice.addEventListener("click", function () {
  if (gamePlaying) {
    // 1. random number
    const dice = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    const totalDice = dice + dice2;

    //2. display the result
    const diceDom = document.querySelector(".dice");
    diceDom.style.display = "block";
    diceDom.src = "dice-" + dice + ".png";

    const dice2Dom = document.querySelector(".dice-02");
    dice2Dom.style.display = "block";
    dice2Dom.src = "dice-" + dice2 + ".png";
    //3. update the round score if the rolled number was not a 1

    if (dice === 6 && lastDice === 6) {
      score[activePlayer] = 0;
      document.querySelector("#score-" + activePlayer).textContent = "0";

      nextPlayer();
    } else if (dice !== 1 && dice2 !== 1) {
      document.querySelector("#current-" + activePlayer).textContent = "0";
      // Add score
      roundScore += totalDice;

      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
      //Next player
      nextPlayer();
    }
    lastDice = dice;
  }
});

const Hold = document.querySelector(".btn-hold");

Hold.addEventListener("click", function () {
  if (gamePlaying) {
    // add Current score to GLOBAL score

    score[activePlayer] += roundScore;

    //console.log(totalDice);

    //UPDATE THE UI
    document.querySelector("#score-" + activePlayer).textContent =
      score[activePlayer];

    const inPut = document.getElementById("set-score").value;

    if (inPut) {
      winningscore = inPut;
    } else {
      winningscore = 100;
    }

    //CHECK IF PLAYER WON THE GAME

    if (score[activePlayer] >= winningscore) {
      document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
      document.querySelector(".dice").style.display = "none";
      document.querySelector(".dice-02").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");

      gamePlaying = false;
      //alert("you are the winner")
    } else {
      nextPlayer();
    }
  }
});

function nextPlayer() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}

document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  score = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";
  document.querySelector(".dice-02").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "player 1";
  document.getElementById("name-1").textContent = "player 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}

//console.log(dice);

//document.querySelector("#current-" + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em' > + dice + '</em>';

//const x = document.querySelector("#score-0").textContent;
//console.log(x);

/*function btn() {
  //do something here
  
}
document.querySelector('#btn-roll').addEventListener('click', btn );*/

//let winning = parseInt(inPut.value);

///subMit.addEventListener("click", function () {

//const newWinnig = parseInt(inPut.value);

/***  Hold.addEventListener("click", function () {
    if (gamePlaying) {
      // add Current score to GLOBAL score
      score[activePlayer] += roundScore;

      //UPDATE THE UI
      document.querySelector("#score-" + activePlayer).textContent =
        score[activePlayer];

      //CHECK IF PLAYER WON THE GAME

      if (score[activePlayer] >= newWinnig) {
        document.querySelector("#name-" + activePlayer).textContent = "WINNER!";
        document.querySelector(".dice").style.display = "none";
        document
          .querySelector(".player-" + activePlayer + "-panel")
          .classList.add("winner");
        document
          .querySelector(".player-" + activePlayer + "-panel")
          .classList.remove("active");

        gamePlaying = false;
        //alert("you are the winner")
      } else {
        nextPlayer();
      }
    }
  });*/

// console.log(newWinnig)
//});

/*//Declaring a function
function num(x, y) {
  const sum = x + y;
  return sum;
}
console.log(num("bad", "boy"));

// immediately invoked function expression (IIFE)
const declare = (function (a, b) {
  const result = a + b;
  return result;
})(4, 20);
console.log(declare);

const car = {
  carName: "toyota",
  carColor: "red",
  yearMake: 2018,
};
console.log(car);

// function within a function

function createFunction() {
  function c(m, b) {
    const male = {
      fName: "sam",
      age: 20,
      job: "Driver",
    };
    return male;
  }
  return c;
}
const c = createFunction();
console.log(c(100, 20));

//function Hoisting
// a function is returned before it is intialized..

function aFunction() {
  return d;
  function d(y, z) {
    const div = y / z;
    return div;
  }
}
const d = aFunction();
console.log(d(20, 2));

//Closures
//the combination of a function and its environment.....

function subTract(a) {
  function S(b) {
    const sub = a - b;
    return sub;
  }
  return S;
}
const S = subTract(100);
console.log(S(35));

//Arrow Syntax
let name = "Joe";
let surName = "sam";
const F = (name, surName) => {
  const sub = name + surName;
  return sub;
};
//Omit Return

console.log(F(name, surName));

const f = (a, b) => a + b;
console.log(f(10, 2));

// Rest Argument
// Rest syntax is use to access the argument passed in an argument...

function A(...args) {
  const sumAll = args[2] / args[0];
  return sumAll;
}
console.log(A(10, 20, 30, 35, 47));

// counter increment by 1
const createCounter = function (n) {
  return function () {
    return n++;
    //return counter;
  };
};
const counter = createCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

//Three functions increment, rest, decrement
//let I = value;

const Mycounter = function (I) {
  // let I = value;

  function increment() {
    I++;
    return I;
  }
  function reset() {
    I--;
    return I;
  }
  function decrement() {
    I--;
    return I;
  }

  return {
    increment,
    reset,
    decrement,
  };
};
const count = Mycounter(5);

console.log(count.increment());
//count.increment();

console.log(count.reset());
//count.reset();

console.log(count.decrement());
//  count.reset();

//console.log(count.getValue());
// count.decrement();*/
