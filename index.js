//collecting use name at page reload
let userName = "";

// Prompt user for their name on page load
window.onload = function () {
  userName = prompt("Please enter your name:", "Player");
  if (userName == null || userName == "") {
    userName = "Anonymous"; // Default name if user doesn't enter a name
  }
};

//firebase config and data managing

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

//function to save the user name and thier score
const saveScore = (name, score) => {
  if (score < 0) return;
  let newScoreRef = messagesRef.push();
  newScoreRef.set({
    name: name,
    score: score,
    timestamp: Date.now(), // Optional: add a timestamp to sort by recent scores
  });
};

// Retrieve and display the top scores from Firebase
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

// Call the function to display top scores
displayTopScores();

//game logic
//settig the default colours for the game
const colours = ["green", "red", "yellow", "blue"];

//variable declarations
let i = 0;
let keyDownCount = 0;
let anyKey = false;
let level = 0;
let sequence = [];
let userInput = [];

//function for setting the game title
const setTitle = () => {
  !anyKey
    ? $("h1").text("Press A Key to Start")
    : $("h1").text(`Level ${level}`);
};

//calling the above function to set the title initially
setTitle();
const getRandomNumber = () => {
  return Math.floor(Math.random() * 4);
};

//handling the key press event initially
$(document).on("keydown", (e) => {
  if (keyDownCount === 1) {
    return;
  }
  keyDownCount++;
  $("h1").text(`Level ${level}`);
  anyKey = true;
  setTitle();
  nextSequence();
});

//function for animating the button click
const animateButton = (clickedColour) => {
  $(`#${clickedColour}`).addClass("pressed");
  setTimeout(() => {
    $(`#${clickedColour}`).removeClass("pressed");
  }, 150);
};

//function for generating new sequence
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

//function for simulating the level sequence
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

//gameover function
const gameOver = () => {
  $("h1").text("Game Over, Press Any Key to Restart");
  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 800);
  const sound = new Audio(`./sounds/wrong.mp3`);
  sound.play();
  //saving the score to database
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

//validation of user input with sequence
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

//handling the user clik event accordingly
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
