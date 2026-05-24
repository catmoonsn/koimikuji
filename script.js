// script.js

const omikuji =
  document.getElementById("omikuji");

const rank =
  document.getElementById("rank");

const text =
  document.getElementById("text");

const message =
  document.getElementById("message");

/* 同じタブだけ1回 */

if(sessionStorage.getItem("loveOmikujiPlayed")){

  message.innerText =
    "このタブではもう引いています";

  omikuji.style.pointerEvents = "none";
  omikuji.style.opacity = ".75";
}

/* おみくじ */

const fortunes = [

  {
    rank:"超大吉",
    text:"恋愛運最高潮\n運命が動き出す"
  },

  {
    rank:"大吉",
    text:"想いが届く\n素敵な一日"
  },

  {
    rank:"中吉",
    text:"笑顔が恋を\n引き寄せます"
  },

  {
    rank:"吉",
    text:"自然体が\nいちばん大切"
  },

  {
    rank:"小吉",
    text:"今日は静かに\n想いを温めて"
  }

];

/* 開く */

omikuji.addEventListener("click",()=>{

  if(sessionStorage.getItem("loveOmikujiPlayed")) return;

  const random =
    fortunes[
      Math.floor(Math.random()*fortunes.length)
    ];

  rank.innerText =
    random.rank;

  text.innerText =
    random.text;

  omikuji.classList.add("open");

  sessionStorage.setItem(
    "loveOmikujiPlayed",
    "true"
  );

  createSparkles();

  message.innerText =
    "素敵な恋がありますように";
});

/* キラキラ */

function createSparkles(){

  for(let i=0;i<24;i++){

    const sparkle =
      document.createElement("div");

    sparkle.classList.add("sparkle");

    sparkle.style.left =
      Math.random()*window.innerWidth+"px";

    sparkle.style.top =
      Math.random()*window.innerHeight+"px";

    sparkle.style.animationDelay =
      Math.random()*0.8+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{
      sparkle.remove();
    },2000);
  }
}