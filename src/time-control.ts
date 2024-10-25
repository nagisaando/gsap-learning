import gsap from "gsap";
import Physics2DPlugin from "gsap-trial/Physics2DPlugin";

gsap.registerPlugin(Physics2DPlugin);
export function timeControl() {
  document.getElementById("time-control")!.innerHTML = `
    <button id="play-button">play</button>
    <button id="pause-button">pause</button>
    <button id="reverse-button">reverse</button>
    <button id="restart-button">restart</button>
    <button id="test-button">test</button>
  `;
  let star = document.querySelector(".star");
  let container = document.querySelector(".star-container");
  for (let i = 0; i < 10; i++) {
    let cloneStar = star!.cloneNode();
    container!.appendChild(cloneStar);
  }

  var animation = gsap
    .timeline()
    .from(".square", {
      scale: 0,
      rotate: 360,
      duration: 1,
      ease: "back.out",
    })
    .from(".letter", {
      yPercent: "random([-120, 120])",
      duration: 1,
      stagger: 0.05,
      ease: "back.out",
    })
    .add("test")
    .from(".flower", { duration: 2, rotate: 360, ease: "back.out", scale: 0 })

    .fromTo(
      ".star",
      {
        duration: 0.2,
        scale: 0,
      },
      {
        duration: 0.2,
        scale: "random(0.2, 0.6)",
      },
      "-=2"
    )
    .to(
      ".star",
      {
        duration: 1.5,
        physics2D: {
          velocity: "random(500, 750)",
          angle: "random(250, 290)",
          gravity: 800,
        },
        stagger: 0.05,
      },
      "-=2"
    )
    .to(
      ".star",
      {
        duration: 0.5,
        scale: 0,
      },
      "-=0.7"
    );

  const playButton = document.querySelector("#play-button");
  const restartButton = document.querySelector("#restart-button");
  const reverseButton = document.querySelector("#reverse-button");
  const pauseButton = document.querySelector("#pause-button");
  const testButton = document.querySelector("#test-button");

  playButton?.addEventListener("click", () => animation.play());
  pauseButton?.addEventListener("click", () => animation.pause());
  reverseButton?.addEventListener("click", () => animation.reverse());
  restartButton?.addEventListener("click", () => animation.restart());
  testButton?.addEventListener("click", () => animation.play("test"));
}
