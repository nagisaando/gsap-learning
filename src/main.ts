import "./style.css";
import { gsap } from "gsap";

// Timeline: container for multiple tweens
let tl = gsap.timeline();

// Tween: to change a single/multiple property of single/multiple object over time

const boxContainer = document.querySelector<HTMLDivElement>("#box-container");

for (let i = 0; i < 25; i++) {
  boxContainer!.innerHTML += `<div class="box"></div>`;
}
boxContainer?.innerHTML;

tl.to(".box", {
  x: 200,
  duration: 1,
  rotation: 360,
  ease: "bounce.out",
  stagger: {
    amount: 0.5,
    from: "random",
    axis: null,
  },

  // repeat: 1,
}).add([
  gsap.to(".box", {
    duration: 0.5,
    scale: 0.8,
    ease: "none",
    background: "#fff",
    borderRadius: 0,
    stagger: {
      amount: 0.5,
      grid: [5, 5],
      from: "center",
    },
  }),
]);

document.querySelectorAll<HTMLDivElement>(".box").forEach((box) => {
  box.addEventListener("click", () => {
    tl.add([
      gsap.to(box, {
        duration: 0.1,
        yoyo: true,
        ease: "power1.inOut", // Smooth in/out easing for shake effect
        repeat: 5, // Repeat 5 times to create a shake effect
        x: "+=3",
        y: "+=3",
      }),
      gsap.to(box, {
        duration: 0.1,
        scale: 1.2,
        yoyo: true,
        repeat: 1,
      }),
    ]).to(box, {
      duration: 0.2,
      ease: "none",
      background: "#242424",
      borderRadius: 0,
    });
  });
});
