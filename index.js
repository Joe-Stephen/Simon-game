const a0_0x34711a = a0_0x3999;
(function (_0x41a00e, _0x2cce82) {
  const _0x14ee6d = a0_0x3999,
    _0x3788a2 = _0x41a00e();
  while (!![]) {
    try {
      const _0x3b13c4 =
        (-parseInt(_0x14ee6d(0x1f6)) / 0x1) *
          (parseInt(_0x14ee6d(0x1d9)) / 0x2) +
        (parseInt(_0x14ee6d(0x1fb)) / 0x3) *
          (parseInt(_0x14ee6d(0x201)) / 0x4) +
        parseInt(_0x14ee6d(0x1df)) / 0x5 +
        -parseInt(_0x14ee6d(0x20c)) / 0x6 +
        (-parseInt(_0x14ee6d(0x1e8)) / 0x7) *
          (-parseInt(_0x14ee6d(0x1e5)) / 0x8) +
        (parseInt(_0x14ee6d(0x204)) / 0x9) *
          (parseInt(_0x14ee6d(0x1f2)) / 0xa) +
        -parseInt(_0x14ee6d(0x20d)) / 0xb;
      if (_0x3b13c4 === _0x2cce82) break;
      else _0x3788a2["push"](_0x3788a2["shift"]());
    } catch (_0x4dbade) {
      _0x3788a2["push"](_0x3788a2["shift"]());
    }
  }
})(a0_0x4eb8, 0xab40a);
function a0_0x3999(_0x4fe6aa, _0x3afe7c) {
  const _0x4eb8b1 = a0_0x4eb8();
  return (
    (a0_0x3999 = function (_0x399997, _0xe2f188) {
      _0x399997 = _0x399997 - 0x1d1;
      let _0x52c078 = _0x4eb8b1[_0x399997];
      return _0x52c078;
    }),
    a0_0x3999(_0x4fe6aa, _0x3afe7c)
  );
}
let userName = "";
window[a0_0x34711a(0x1ed)] = function () {
  const _0x40dde7 = a0_0x34711a;
  (userName = prompt(_0x40dde7(0x1f7), _0x40dde7(0x1d6))),
    (userName == null || userName == "") && (userName = _0x40dde7(0x1fd));
};
let firebaseConfig = {
  apiKey: a0_0x34711a(0x20b),
  authDomain: a0_0x34711a(0x1e2),
  projectId: "simon-game-74fd3",
  storageBucket: "simon-game-74fd3.appspot.com",
  messagingSenderId: "60510752940",
  appId: a0_0x34711a(0x1d5),
  measurementId: a0_0x34711a(0x1e9),
  databaseURL: a0_0x34711a(0x205),
};
firebase["initializeApp"](firebaseConfig);
let messagesRef =
  firebase[a0_0x34711a(0x1d7)]()[a0_0x34711a(0x1f3)]("Top\x20scores");
const saveScore = (_0x5bf59c, _0x2c7648) => {
  const _0x7cd03c = a0_0x34711a;
  if (_0x2c7648 < 0x0 || _0x2c7648 !== level - 0x1 || _0x5bf59c !== userName)
    return;
  let _0x18c30f = messagesRef[_0x7cd03c(0x206)]();
  _0x18c30f[_0x7cd03c(0x1db)]({
    name: _0x5bf59c,
    score: _0x2c7648,
    timestamp: Date[_0x7cd03c(0x20a)](),
  });
};
function displayTopScores() {
  const _0x4752b1 = a0_0x34711a;
  messagesRef[_0x4752b1(0x1f0)](_0x4752b1(0x1d3))
    ["limitToLast"](0x5)
    [_0x4752b1(0x1f1)](_0x4752b1(0x202), function (_0x11ebdd) {
      const _0x3c1273 = _0x4752b1;
      let _0x10ee8d = document[_0x3c1273(0x1da)](_0x3c1273(0x1f8));
      _0x10ee8d[_0x3c1273(0x1de)] = "";
      let _0x23fe16 = [];
      _0x11ebdd["forEach"](function (_0x119b61) {
        const _0x164bc0 = _0x3c1273;
        let _0x40d246 = _0x119b61[_0x164bc0(0x1f9)]();
        _0x23fe16[_0x164bc0(0x206)](_0x40d246);
      }),
        _0x23fe16[_0x3c1273(0x1f4)](
          (_0x305280, _0x16a37b) =>
            _0x16a37b[_0x3c1273(0x1d3)] - _0x305280[_0x3c1273(0x1d3)]
        ),
        _0x23fe16[_0x3c1273(0x1dc)]((_0x4811ee) => {
          const _0x452159 = _0x3c1273;
          let _0x31d216 = document["createElement"]("li");
          (_0x31d216[_0x452159(0x209)] =
            _0x4811ee[_0x452159(0x1ff)] +
            ":\x20" +
            _0x4811ee[_0x452159(0x1d3)]),
            _0x10ee8d[_0x452159(0x1e6)](_0x31d216);
        });
    });
}
displayTopScores();
const colours = [
  a0_0x34711a(0x1ef),
  "red",
  a0_0x34711a(0x1fa),
  a0_0x34711a(0x207),
];
let i = 0x0,
  keyDownCount = 0x0,
  anyKey = ![],
  level = 0x0,
  sequence = [],
  userInput = [];
const setTitle = () => {
  const _0x3b5e3c = a0_0x34711a;
  !anyKey
    ? $(_0x3b5e3c(0x1ee))[_0x3b5e3c(0x1d8)](_0x3b5e3c(0x1d4))
    : $(_0x3b5e3c(0x1ee))[_0x3b5e3c(0x1d8)](_0x3b5e3c(0x1fe) + level);
};
setTitle();
const getRandomNumber = () => {
  const _0x38347b = a0_0x34711a;
  return Math[_0x38347b(0x1dd)](Math[_0x38347b(0x1fc)]() * 0x4);
};
$(a0_0x34711a(0x1e7))["on"](a0_0x34711a(0x1e0), (_0xad5d9a) => {
  const _0x38b5d8 = a0_0x34711a;
  if (keyDownCount === 0x1) return;
  keyDownCount++,
    $(_0x38b5d8(0x1ee))[_0x38b5d8(0x1d8)](_0x38b5d8(0x1fe) + level),
    (anyKey = !![]),
    setTitle(),
    nextSequence();
});
const animateButton = (_0x576f4a) => {
    $("#" + _0x576f4a)["addClass"]("pressed"),
      setTimeout(() => {
        $("#" + _0x576f4a)["removeClass"]("pressed");
      }, 0x96);
  },
  nextSequence = () => {
    const _0x2a6d9e = a0_0x34711a;
    if (i === sequence[_0x2a6d9e(0x1e1)]) {
      (i = 0x0), (userInput = []);
      const _0x5d8f35 = getRandomNumber(),
        _0x27bc12 = colours[_0x5d8f35];
      sequence[_0x2a6d9e(0x206)](_0x27bc12), level++, simulateSequence();
    }
  },
  simulateSequence = () => {
    let _0x1806cd = 0x3e8;
    setTitle();
    for (let _0x4f1058 = 0x0; _0x4f1058 < sequence["length"]; _0x4f1058++) {
      setTimeout(() => {
        const _0x3e7166 = a0_0x3999;
        new Audio(_0x3e7166(0x1ec) + sequence[_0x4f1058] + _0x3e7166(0x1ea))[
          _0x3e7166(0x1d2)
        ](),
          animateButton(sequence[_0x4f1058]);
      }, _0x1806cd),
        (_0x1806cd += 0x1f4);
    }
  },
  gameOver = () => {
    const _0x13425a = a0_0x34711a;
    $(_0x13425a(0x1ee))[_0x13425a(0x1d8)](_0x13425a(0x1e4)),
      $(_0x13425a(0x200))["addClass"](_0x13425a(0x208)),
      setTimeout(() => {
        const _0x1504ae = _0x13425a;
        $(_0x1504ae(0x200))[_0x1504ae(0x1eb)]("game-over");
      }, 0x320);
    const _0xf6e560 = new Audio(_0x13425a(0x1e3));
    _0xf6e560[_0x13425a(0x1d2)](),
      saveScore(userName, level - 0x1),
      displayTopScores(),
      (sequence = []),
      (userInput = []),
      (i = 0x0),
      (keyDownCount = 0x0),
      (anyKey = ![]),
      (level = 0x0),
      setTitle();
  },
  validate = () => {
    const _0x3f9621 = a0_0x34711a;
    if (
      userInput[userInput[_0x3f9621(0x1e1)] - 0x1] !==
      colours[_0x3f9621(0x203)](sequence[userInput[_0x3f9621(0x1e1)] - 0x1])
    )
      return gameOver(), ![];
    return !![];
  };
function a0_0x4eb8() {
  const _0x373388 = [
    "blue",
    "game-over",
    "textContent",
    "now",
    "AIzaSyBM_sYNmV5h-UBkMi-jWvTdKiORdHquOxs",
    "2376642Kqmgzq",
    "12029655GmtPsH",
    ".btn",
    "play",
    "score",
    "Press\x20Start\x20to\x20play",
    "1:60510752940:web:214eda33e32af87d918f09",
    "Player",
    "database",
    "text",
    "2jVrapK",
    "getElementById",
    "set",
    "forEach",
    "floor",
    "innerHTML",
    "3425510AQWEVn",
    "click",
    "length",
    "simon-game-74fd3.firebaseapp.com",
    "./sounds/wrong.mp3",
    "Game\x20Over,\x20Press\x20Start\x20to\x20Restart",
    "88376xWdhke",
    "appendChild",
    "#start-btn",
    "469LUYUxm",
    "G-HLG3PMV1DZ",
    ".mp3",
    "removeClass",
    "./sounds/",
    "onload",
    "#level-title",
    "green",
    "orderByChild",
    "once",
    "40ExdLEa",
    "ref",
    "sort",
    "target",
    "930991akwtrD",
    "Please\x20enter\x20your\x20name:",
    "scoreTable",
    "val",
    "yellow",
    "3dvQHnX",
    "random",
    "Anonymous",
    "Level\x20",
    "name",
    "body",
    "5531336fMblCq",
    "value",
    "indexOf",
    "706653GToHjS",
    "https://simon-game-74fd3-default-rtdb.firebaseio.com/",
    "push",
  ];
  a0_0x4eb8 = function () {
    return _0x373388;
  };
  return a0_0x4eb8();
}
$(a0_0x34711a(0x1d1))["on"](a0_0x34711a(0x1e0), (_0xdef221) => {
  const _0x4c6901 = a0_0x34711a,
    _0x3ac4d7 = _0xdef221[_0x4c6901(0x1f5)]["id"],
    _0x32cf4e = colours[_0x4c6901(0x203)]("" + _0x3ac4d7);
  userInput["push"](_0x32cf4e), animateButton(_0x3ac4d7);
  const _0x292295 = new Audio("./sounds/" + _0x3ac4d7 + _0x4c6901(0x1ea));
  _0x292295["play"](), validate() && (i++, nextSequence());
});
