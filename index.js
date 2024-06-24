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
  let interval = 500;
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
  new Audio(`./sounds/wrong.mp3`).play();
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
  }
};

//handling the user clik event accordingly
$(".btn").on("click", (e) => {
  const clickedColour = e.target.id;
  const colourCode = colours.indexOf(`${clickedColour}`);
  userInput.push(colourCode);
  animateButton(clickedColour);
  const sound = new Audio(`./sounds/${clickedColour}.mp3`);
  sound.play();
  validate();
  i++;
  nextSequence();
});
