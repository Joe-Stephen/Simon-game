let userName = "";

// Prompt user for their name on page load
window.onload = function () {
  userName = prompt("Please enter your name:", "Player");
  if (userName == null || userName == "") {
    userName = "Anonymous"; // Default name if user doesn't enter a name
  }
};

let firebaseConfig = {
  apiKey: "AIzaSyBM_sYNmV5h-UBkMi-jWvTdKiORdHquOxs",
  authDomain: "simon-game-74fd3.firebaseapp.com",
  projectId: "simon-game-74fd3",
  storageBucket: "simon-game-74fd3.appspot.com",
  messagingSenderId: "60510752940",
  appId: "1:60510752940:web:214eda33e32af87d918f09",
  measurementId: "G-HLG3PMV1DZ",
  databaseURL: "https://simon-game-74fd3-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

let messagesRef = firebase.database().ref("Top scores");

const saveScore = (name, score) => {
  if (score < 0 || score !== (level - 1) || name !== userName) return;
  let newScoreRef = messagesRef.push();
  newScoreRef.set({
    name: name,
    score: score,
    timestamp: Date.now(), // Optional: add a timestamp to sort by recent scores
  });
};

function displayTopScores() {
  messagesRef
    .orderByChild("score")
    .limitToLast(5)
    .once("value", function (snapshot) {
      let scoreTable = document.getElementById("scoreTable");
      scoreTable.innerHTML = ""; // Clear previous scores

      let scores = [];
      snapshot.forEach(function (childSnapshot) {
        let childData = childSnapshot.val();
        scores.push(childData); // Collect all scores
      });

      // Sort the scores in descending order
      scores.sort((a, b) => b.score - a.score);

      // Display the scores
      scores.forEach((scoreData) => {
        let listItem = document.createElement("li");
        listItem.textContent = `${scoreData.name}: ${scoreData.score}`;
        scoreTable.appendChild(listItem);
      });
    });
}

displayTopScores();

const colours = ["green", "red", "yellow", "blue"];

let i = 0;
let keyDownCount = 0;
let anyKey = false;
let level = 0;
let sequence = [];
let userInput = [];

const setTitle = () => {
  !anyKey
    ? $("#level-title").text("Press Start to play")
    : $("#level-title").text(`Level ${level}`);
};

setTitle();

const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};

// Update event listener to start game on "Start" button click
$("#start-btn").on("click", (e) => {
  if (keyDownCount === 1) {
    return;
  }
  keyDownCount++;
  $("#level-title").text(`Level ${level}`);
  anyKey = true;
  setTitle();
  nextSequence();
});

const animateButton = (clickedColour) => {
  $(`#${clickedColour}`).addClass("pressed");
  setTimeout(() => {
    $(`#${clickedColour}`).removeClass("pressed");
  }, 150);
};

const nextSequence = () => {
  if (i === sequence.length) {
    i = 0;
    userInput = [];
    const randomNumber = getRandomNumber();
    const colour = colours[randomNumber];
    sequence.push(colour);
    level++;
    simulateSequence();
  }
};

const simulateSequence = () => {
  let interval = 1000;
  setTitle();
  for (let i = 0; i < sequence.length; i++) {
    setTimeout(() => {
      new Audio(`./sounds/${sequence[i]}.mp3`).play();
      animateButton(sequence[i]);
    }, interval);
    interval += 500;
  }
};

const gameOver = () => {
  $("#level-title").text("Game Over, Press Start to Restart");
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 800);
  const sound = new Audio(`./sounds/wrong.mp3`);
  sound.play();
  saveScore(userName, level - 1);
  displayTopScores();
  sequence = [];
  userInput = [];
  i = 0;
  keyDownCount = 0;
  anyKey = false;
  level = 0;
  setTitle();
};

const validate = () => {
  if (
    userInput[userInput.length - 1] !==
    colours.indexOf(sequence[userInput.length - 1])
  ) {
    gameOver();
    return false;
  }
  return true;
};

$(".btn").on("click", (e) => {
  const clickedColour = e.target.id;
  const colourCode = colours.indexOf(`${clickedColour}`);
  userInput.push(colourCode);
  animateButton(clickedColour);
  const sound = new Audio(`./sounds/${clickedColour}.mp3`);
  sound.play();
  if (validate()) {
    i++;
    nextSequence();
  }
});
