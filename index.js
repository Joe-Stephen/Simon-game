const a0_0x457756 = a0_0x4df2;
(function (_0x3ab18e, _0x48f2f8) {
  const _0x4c6894 = a0_0x4df2,
    _0xcebe11 = _0x3ab18e();
  while (!![]) {
    try {
      const _0x7f871c =
        -parseInt(_0x4c6894(0x154)) / 0x1 +
        (parseInt(_0x4c6894(0x163)) / 0x2) *
          (parseInt(_0x4c6894(0x170)) / 0x3) +
        (-parseInt(_0x4c6894(0x179)) / 0x4) *
          (-parseInt(_0x4c6894(0x155)) / 0x5) +
        -parseInt(_0x4c6894(0x187)) / 0x6 +
        -parseInt(_0x4c6894(0x160)) / 0x7 +
        (parseInt(_0x4c6894(0x17d)) / 0x8) *
          (parseInt(_0x4c6894(0x150)) / 0x9) +
        (-parseInt(_0x4c6894(0x16a)) / 0xa) *
          (parseInt(_0x4c6894(0x184)) / 0xb);
      if (_0x7f871c === _0x48f2f8) break;
      else _0xcebe11["push"](_0xcebe11["shift"]());
    } catch (_0x2a4713) {
      _0xcebe11["push"](_0xcebe11["shift"]());
    }
  }
})(a0_0x24d1, 0xc3e08);
let userName = "";
window[a0_0x457756(0x161)] = function () {
  const _0x210bc7 = a0_0x457756;
  (userName = prompt(_0x210bc7(0x15c), _0x210bc7(0x182))),
    (userName == null || userName == "") && (userName = _0x210bc7(0x180));
};
let firebaseConfig = {
  apiKey: a0_0x457756(0x18a),
  authDomain: a0_0x457756(0x17c),
  projectId: a0_0x457756(0x15b),
  storageBucket: a0_0x457756(0x16b),
  messagingSenderId: a0_0x457756(0x189),
  appId: a0_0x457756(0x15f),
  measurementId: a0_0x457756(0x152),
  databaseURL: a0_0x457756(0x164),
};
firebase["initializeApp"](firebaseConfig);
let messagesRef = firebase["database"]()[a0_0x457756(0x158)](
  a0_0x457756(0x165)
);
const saveScore = (_0x545875, _0x499a5f) => {
  const _0x361161 = a0_0x457756;
  if (_0x499a5f < 0x0) return;
  let _0x5eb038 = messagesRef[_0x361161(0x172)]();
  _0x5eb038[_0x361161(0x176)]({
    name: _0x545875,
    score: _0x499a5f,
    timestamp: Date["now"](),
  });
};
function displayTopScores() {
  const _0x40707b = a0_0x457756;
  messagesRef[_0x40707b(0x181)](_0x40707b(0x159))
    ["limitToLast"](0x5)
    [_0x40707b(0x151)]("value", function (_0x2be7e1) {
      const _0xb4fa70 = _0x40707b;
      let _0x22e4d3 = document[_0xb4fa70(0x185)](_0xb4fa70(0x17f));
      _0x22e4d3[_0xb4fa70(0x168)] = "";
      let _0x3529b4 = [];
      _0x2be7e1[_0xb4fa70(0x153)](function (_0x21bd99) {
        let _0x2ba106 = _0x21bd99["val"]();
        _0x3529b4["push"](_0x2ba106);
      }),
        _0x3529b4[_0xb4fa70(0x15e)](
          (_0x36fc45, _0x2345e2) =>
            _0x2345e2[_0xb4fa70(0x159)] - _0x36fc45[_0xb4fa70(0x159)]
        ),
        _0x3529b4[_0xb4fa70(0x153)]((_0x3af44f) => {
          const _0x214672 = _0xb4fa70;
          let _0x3dad04 = document[_0x214672(0x183)]("li");
          (_0x3dad04[_0x214672(0x16d)] =
            _0x3af44f[_0x214672(0x14f)] + ":\x20" + _0x3af44f["score"]),
            _0x22e4d3[_0x214672(0x17b)](_0x3dad04);
        });
    });
}
displayTopScores();
const colours = [
  a0_0x457756(0x16c),
  a0_0x457756(0x175),
  "yellow",
  a0_0x457756(0x157),
];
let i = 0x0,
  keyDownCount = 0x0,
  anyKey = ![],
  level = 0x0,
  sequence = [],
  userInput = [];
const setTitle = () => {
  const _0xa684a9 = a0_0x457756;
  !anyKey
    ? $("h1")[_0xa684a9(0x166)](_0xa684a9(0x17a))
    : $("h1")["text"](_0xa684a9(0x162) + level);
};
function a0_0x24d1() {
  const _0x4622a8 = [
    "body",
    "floor",
    "8cxUCpt",
    "Press\x20A\x20Key\x20to\x20Start",
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
    "Please\x20enter\x20your\x20name:",
    "target",
    "sort",
    "1:60510752940:web:214eda33e32af87d918f09",
    "7231147WxOVOC",
    "onload",
    "Level\x20",
    "28554ImCezt",
    "https://simon-game-74fd3-default-rtdb.firebaseio.com/",
    "Top\x20scores",
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
  a0_0x24d1 = function () {
    return _0x4622a8;
  };
  return a0_0x24d1();
}
function a0_0x4df2(_0x21dc5f, _0x5e11b1) {
  const _0x24d138 = a0_0x24d1();
  return (
    (a0_0x4df2 = function (_0x4df2e1, _0x5767a1) {
      _0x4df2e1 = _0x4df2e1 - 0x14f;
      let _0x363390 = _0x24d138[_0x4df2e1];
      return _0x363390;
    }),
    a0_0x4df2(_0x21dc5f, _0x5e11b1)
  );
}
setTitle();
const getRandomNumber = () => {
  const _0x453d53 = a0_0x457756;
  return Math[_0x453d53(0x178)](Math["random"]() * 0x4);
};
$(document)["on"](a0_0x457756(0x156), (_0x59f960) => {
  const _0x58392b = a0_0x457756;
  if (keyDownCount === 0x1) return;
  keyDownCount++,
    $("h1")[_0x58392b(0x166)](_0x58392b(0x162) + level),
    (anyKey = !![]),
    setTitle(),
    nextSequence();
});
const animateButton = (_0x3dfb17) => {
    const _0x12ef2e = a0_0x457756;
    $("#" + _0x3dfb17)[_0x12ef2e(0x186)]("pressed"),
      setTimeout(() => {
        const _0x493cd4 = _0x12ef2e;
        $("#" + _0x3dfb17)[_0x493cd4(0x188)](_0x493cd4(0x174));
      }, 0x96);
  },
  nextSequence = () => {
    const _0x25914d = a0_0x457756;
    if (i === sequence[_0x25914d(0x15a)]) {
      (i = 0x0), (userInput = []);
      const _0x30df5c = getRandomNumber(),
        _0x3d9cec = colours[_0x30df5c];
      sequence[_0x25914d(0x172)](_0x3d9cec), level++, simulateSequence();
    }
  },
  simulateSequence = () => {
    const _0x411458 = a0_0x457756;
    let _0x1b1894 = 0x3e8;
    setTitle();
    for (
      let _0xaadfad = 0x0;
      _0xaadfad < sequence[_0x411458(0x15a)];
      _0xaadfad++
    ) {
      setTimeout(() => {
        const _0x34c7e5 = _0x411458;
        new Audio("./sounds/" + sequence[_0xaadfad] + _0x34c7e5(0x17e))[
          _0x34c7e5(0x16f)
        ](),
          animateButton(sequence[_0xaadfad]);
      }, _0x1b1894),
        (_0x1b1894 += 0x1f4);
    }
  },
  gameOver = () => {
    const _0x4da08c = a0_0x457756;
    $("h1")[_0x4da08c(0x166)](
      "Game\x20Over,\x20Press\x20Any\x20Key\x20to\x20Restart"
    ),
      $("body")["addClass"](_0x4da08c(0x171)),
      setTimeout(() => {
        const _0x452d3d = _0x4da08c;
        $(_0x452d3d(0x177))[_0x452d3d(0x188)]("game-over");
      }, 0x320);
    const _0x345f13 = new Audio(_0x4da08c(0x167));
    _0x345f13[_0x4da08c(0x16f)](),
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
    const _0x5af3b3 = a0_0x457756;
    if (
      userInput[userInput[_0x5af3b3(0x15a)] - 0x1] !==
      colours["indexOf"](sequence[userInput[_0x5af3b3(0x15a)] - 0x1])
    )
      return gameOver(), ![];
    return !![];
  };
$(a0_0x457756(0x169))["on"](a0_0x457756(0x16e), (_0x5dfa64) => {
  const _0x174683 = a0_0x457756,
    _0x466136 = _0x5dfa64[_0x174683(0x15d)]["id"],
    _0x35893e = colours[_0x174683(0x173)]("" + _0x466136);
  userInput["push"](_0x35893e), animateButton(_0x466136);
  const _0x42d753 = new Audio("./sounds/" + _0x466136 + _0x174683(0x17e));
  _0x42d753[_0x174683(0x16f)](), validate() && (i++, nextSequence());
});
