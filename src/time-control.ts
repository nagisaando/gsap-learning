import gsap from "gsap";

export function timeControl() {
  document.getElementById("time-control")!.innerHTML = `
    <button id="play-button">play</button>
    <button id="pause-button">pause</button>
    <button id="reverse-button">reverse</button>
    <button id="restart-button">restart</button>
  `;

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
    .from(".flower", { duration: 2, rotate: 360, ease: "back.out", scale: 0 });

  const playButton = document.querySelector("#play-button");
  const restartButton = document.querySelector("#restart-button");
  const reverseButton = document.querySelector("#reverse-button");
  const pauseButton = document.querySelector("#pause-button");

  playButton?.addEventListener("click", () => animation.play());
  pauseButton?.addEventListener("click", () => animation.pause());
  reverseButton?.addEventListener("click", () => animation.reverse());
  restartButton?.addEventListener("click", () => animation.restart());
}
