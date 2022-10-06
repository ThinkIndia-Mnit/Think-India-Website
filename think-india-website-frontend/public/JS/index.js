/// for Events Section of Heritage Start
// for image 2
function myfan2() {
  var a = document.getElementById("slidep1");
  var c = document.getElementById("slidep3");
  var d = document.getElementById("slidep4");
  var y = document.getElementById("slidep2");
  if (
    a.style.display === "" ||
    c.style.display === "" ||
    d.style.display === ""
  ) {
    a.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    y.style.display = "";
  }
  // else {
  //     x.style.display = "none";
  //   }
}
// for image 3
function myfan3() {
  var a = document.getElementById("slidep1");
  var b = document.getElementById("slidep2");
  var d = document.getElementById("slidep4");
  var y = document.getElementById("slidep3");
  if (
    a.style.display === "" ||
    b.style.display === "" ||
    d.style.display === ""
  ) {
    a.style.display = "none";
    b.style.display = "none";
    d.style.display = "none";
    y.style.display = "";
  }
  // else {
  //     x.style.display = "none";
  //   }
}
// for image 4
function myfan4() {
  var a = document.getElementById("slidep1");
  var b = document.getElementById("slidep2");
  var c = document.getElementById("slidep3");
  var y = document.getElementById("slidep4");
  if (
    a.style.display === "" ||
    b.style.display === "" ||
    c.style.display === ""
  ) {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    y.style.display = "";
  }
  // else {
  //     x.style.display = "none";
  //   }
}
// for image 1
function myfan1() {
  var d = document.getElementById("slidep4");
  var b = document.getElementById("slidep2");
  var c = document.getElementById("slidep3");
  var y = document.getElementById("slidep1");
  if (
    d.style.display === "" ||
    b.style.display === "" ||
    c.style.display === ""
  ) {
    d.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    y.style.display = "";
  }
  // else {
  //     x.style.display = "none";
  //   }
}
/// for Events Section of Heritage End

// for menu btn
var btn = document.getElementById("menubtn");
var stts = 1;
var menuIcon = document.getElementById("menuIcon");

if (menuIcon) {
  menuIcon.classList.add("fa-bars");
  menuIcon.classList.remove("fa-close");

  // menuIcon.addEventListener("click", () => {
  //   tgl();
  // });
}

document.addEventListener("click", (e) => {
  var menuIcon = document.getElementById("menuIcon");
  var navList = document.getElementById("navList");
  var sectionNav = document.getElementById("sectionNav");
  var menu = document.getElementById("menu");
  if (menu) {
    if (
      !menu.contains(e.target) ||
      (navList.contains(e.target) &&
        !sectionNav.contains(e.target) &&
        sectionNav != e.target)
    ) {
      if (stts == 0)
        if (menuIcon && menu) {
          menuIcon.classList.add("fa-bars");
          menuIcon.classList.remove("fa-close");
          menu.style.right = "-100%";
          stts = 1;
        }
      {
      }
    }
  }
});
const colors = ["#EB7E26", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F55E00"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});