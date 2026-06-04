// script.js

const omikuji =
  document.getElementById("omikuji");

const fortune =
  document.getElementById("fortune");

const action =
  document.getElementById("action");

const messageText =
  document.getElementById("messageText");

const message =
  document.getElementById("message");

/* 同じタブで1回 */

if(sessionStorage.getItem("youthOmikujiPlayed")){

  message.innerText =
    "このタブではもう引いています";

  omikuji.style.pointerEvents = "none";
  omikuji.style.opacity = ".75";
}

/* =======================
   固定パターン
======================= */

const fixedResults = [

  {
    fortune:"超大青春",
    action:"気になる人に話しかける",
    message:"勇気を出した一歩が未来を変える"
  },

  {
    fortune:"大青春",
    action:"一緒に写真を撮る",
    message:"最高の青春の思い出になる"
  },

  {
    fortune:"青春吉",
    action:"笑顔で挨拶する",
    message:"自然な魅力が輝く日"
  },

  {
    fortune:"青春凶",
    action:"良いことをしよう",
    message:"きっと上手くいく"
  }

];

/* =======================
   組み合わせパターン
======================= */

const randomGroups = [

  {
    fortune:"超大青春",

    actions:[

      "友達と写真を撮る",
      "気になる人に話しかける",
      "文化祭を最後まで楽しむ",
      "笑顔で挨拶する",
      "新しい人と話してみる"

    ],

    messages:[

      "思い出は宝物になる",
      "勇気が幸運を呼ぶ",
      "自然体が一番魅力的",
      "笑顔が運を引き寄せる",
      "楽しい一日になりそう"

    ]
  },

  {
    fortune:"大青春",

    actions:[

      "屋台を巡る",
      "友達を誘う",
      "写真をたくさん撮る",
      "新しいことに挑戦する"

    ],

    messages:[

      "意外な発見があるかも",
      "挑戦が未来につながる",
      "小さな幸せを大切に",
      "今日を思い切り楽しもう"

    ]
  },

  {
    fortune:"青春吉",

    actions:[

      "好きなことに全力になる",
      "友達とたくさん話す",
      "感謝を伝える"

    ],

    messages:[

      "良い流れが来ている",
      "前向きな気持ちが大切",
      "行動すると運が動く"

    ]
  },

  {
    fortune:"青春凶",

    actions:[

      "善をしよう",
      "綺麗な風景を撮ろう"

    ],

    messages:[

      "大丈夫楽しめる",
      "今日は思いっきり楽しんもう！"

    ]
  }

];

/* =======================
   全通り生成
======================= */

const allResults = [];

/* 固定追加 */

fixedResults.forEach(result=>{

  allResults.push(result);

});

/* 組み合わせ展開 */

randomGroups.forEach(group=>{

  group.actions.forEach(actionItem=>{

    group.messages.forEach(messageItem=>{

      allResults.push({

        fortune:group.fortune,

        action:actionItem,

        message:messageItem

      });

    });

  });

});

/* =======================
   開く
======================= */

omikuji.addEventListener("click",()=>{

  if(sessionStorage.getItem(
    "youthOmikujiPlayed"
  )) return;

  const random =

    allResults[
      Math.floor(
        Math.random() *
        allResults.length
      )
    ];

  fortune.innerText =
    random.fortune;

  action.innerText =
    random.action;

  messageText.innerText =
    random.message;

  omikuji.classList.add("open");

  sessionStorage.setItem(
    "youthOmikujiPlayed",
    "true"
  );

  createSparkles();

  message.innerText =
    "素敵な一日になりますように";
});

/* =======================
   キラキラ
======================= */

function createSparkles(){

  for(let i=0;i<24;i++){

    const sparkle =
      document.createElement("div");

    sparkle.classList.add(
      "sparkle"
    );

    sparkle.style.left =
      Math.random() *
      window.innerWidth + "px";

    sparkle.style.top =
      Math.random() *
      window.innerHeight + "px";

    sparkle.style.animationDelay =
      Math.random() * 0.8 + "s";

    document.body.appendChild(
      sparkle
    );

    setTimeout(()=>{

      sparkle.remove();

    },2000);
  }
}