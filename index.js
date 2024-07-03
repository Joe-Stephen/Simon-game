const a0_0x457756 = a0_0x4df2;
!(function (e, t) {
  const n = a0_0x4df2,
    s = a0_0x24d1();
  for (;;)
    try {
      if (
        802312 ===
        -parseInt(n(340)) / 1 +
          (parseInt(n(355)) / 2) * (parseInt(n(368)) / 3) +
          (-parseInt(n(377)) / 4) * (-parseInt(n(341)) / 5) +
          -parseInt(n(391)) / 6 +
          -parseInt(n(352)) / 7 +
          (parseInt(n(381)) / 8) * (parseInt(n(336)) / 9) +
          (-parseInt(n(362)) / 10) * (parseInt(n(388)) / 11)
      )
        break;
      s.push(s.shift());
    } catch (e) {
      s.push(s.shift());
    }
})();
let userName = "";
window[a0_0x457756(353)] = function () {
  const e = a0_0x457756;
  (userName = prompt(e(348), e(386))),
    (null == userName || "" == userName) && (userName = e(384));
};
let firebaseConfig = {
  apiKey: a0_0x457756(394),
  authDomain: a0_0x457756(380),
  projectId: a0_0x457756(347),
  storageBucket: a0_0x457756(363),
  messagingSenderId: a0_0x457756(393),
  appId: a0_0x457756(351),
  measurementId: a0_0x457756(338),
  databaseURL: a0_0x457756(356),
};
firebase.initializeApp(firebaseConfig);
let messagesRef = firebase.database()[a0_0x457756(344)](a0_0x457756(357));
const saveScore = (e, t) => {
  const n = a0_0x457756;
  if (t < 0) return;
  messagesRef[n(370)]()[n(374)]({ name: e, score: t, timestamp: Date.now() });
};
function displayTopScores() {
  const e = a0_0x457756;
  messagesRef[e(385)](e(345))
    .limitToLast(5)
    [e(337)]("value", function (t) {
      const n = e;
      let s = document[n(389)](n(383));
      s[n(360)] = "";
      let a = [];
      t[n(339)](function (e) {
        let t = e.val();
        a.push(t);
      }),
        a[n(350)]((e, t) => t[n(345)] - e[n(345)]),
        a[n(339)]((e) => {
          const t = n;
          let a = document[t(387)]("li");
          (a[t(365)] = e[t(335)] + ": " + e.score), s[t(379)](a);
        });
    });
}
displayTopScores();
const colours = [
  a0_0x457756(364),
  a0_0x457756(373),
  "yellow",
  a0_0x457756(343),
];
let i = 0,
  keyDownCount = 0,
  anyKey = !1,
  level = 0,
  sequence = [],
  userInput = [];
const setTitle = () => {
  const e = a0_0x457756;
  anyKey ? $("h1").text(e(354) + level) : $("h1")[e(358)](e(378));
};
function a0_0x24d1() {
  const e = [
    "body",
    "floor",
    "8cxUCpt",
    "Press A Key to Start",
    "appendChild",
    "simon-game-74fd3.firebaseapp.com",
    "8DmcqpI",
    ".mp3",
    "scoreTable",
    "Anonymous",
    "orderByChild",
    "Player",
    "createElement",
    "11XZUPgr",
    "getElementById",
    "addClass",
    "4661658MCiAuV",
    "removeClass",
    "60510752940",
    "AIzaSyBM_sYNmV5h-UBkMi-jWvTdKiORdHquOxs",
    "name",
    "9063144VdUhTd",
    "once",
    "G-HLG3PMV1DZ",
    "forEach",
    "651801OmPaHg",
    "3755480IZmGBa",
    "keydown",
    "blue",
    "ref",
    "score",
    "length",
    "simon-game-74fd3",
    "Please enter your name:",
    "target",
    "sort",
    "1:60510752940:web:214eda33e32af87d918f09",
    "7231147WxOVOC",
    "onload",
    "Level ",
    "28554ImCezt",
    "https://simon-game-74fd3-default-rtdb.firebaseio.com/",
    "Top scores",
    "text",
    "./sounds/wrong.mp3",
    "innerHTML",
    ".btn",
    "589200ozhAHu",
    "simon-game-74fd3.appspot.com",
    "green",
    "textContent",
    "click",
    "play",
    "171eGEArG",
    "game-over",
    "push",
    "indexOf",
    "pressed",
    "red",
    "set",
  ];
  return (a0_0x24d1 = function () {
    return e;
  })();
}
function a0_0x4df2(e, t) {
  const n = a0_0x24d1();
  return (a0_0x4df2 = function (e, t) {
    return n[(e -= 335)];
  })(e, t);
}
setTitle();
const getRandomNumber = () => Math[a0_0x457756(376)](4 * Math.random());
$(document).on(a0_0x457756(342), (e) => {
  const t = a0_0x457756;
  1 !== keyDownCount &&
    (keyDownCount++,
    $("h1")[t(358)](t(354) + level),
    (anyKey = !0),
    setTitle(),
    nextSequence());
});
const animateButton = (e) => {
    const t = a0_0x457756;
    $("#" + e)[t(390)]("pressed"),
      setTimeout(() => {
        const n = t;
        $("#" + e)[n(392)](n(372));
      }, 150);
  },
  nextSequence = () => {
    const e = a0_0x457756;
    if (i === sequence[e(346)]) {
      (i = 0), (userInput = []);
      const t = getRandomNumber(),
        n = colours[t];
      sequence[e(370)](n), level++, simulateSequence();
    }
  },
  simulateSequence = () => {
    const e = a0_0x457756;
    let t = 1e3;
    setTitle();
    for (let n = 0; n < sequence[e(346)]; n++)
      setTimeout(() => {
        const t = e;
        new Audio("./sounds/" + sequence[n] + t(382))[t(367)](),
          animateButton(sequence[n]);
      }, t),
        (t += 500);
  },
  gameOver = () => {
    const e = a0_0x457756;
    $("h1")[e(358)]("Game Over, Press Any Key to Restart"),
      $("body").addClass(e(369)),
      setTimeout(() => {
        const t = e;
        $(t(375))[t(392)]("game-over");
      }, 800);
    new Audio(e(359))[e(367)](),
      saveScore(userName, level - 1),
      displayTopScores(),
      (sequence = []),
      (userInput = []),
      (i = 0),
      (keyDownCount = 0),
      (anyKey = !1),
      (level = 0),
      setTitle();
  },
  validate = () => {
    const e = a0_0x457756;
    return (
      userInput[userInput[e(346)] - 1] ===
        colours.indexOf(sequence[userInput[e(346)] - 1]) || (gameOver(), !1)
    );
  };
$(a0_0x457756(361)).on(a0_0x457756(366), (e) => {
  const t = a0_0x457756,
    n = e[t(349)].id,
    s = colours[t(371)]("" + n);
  userInput.push(s), animateButton(n);
  new Audio("./sounds/" + n + t(382))[t(367)](),
    validate() && (i++, nextSequence());
});
