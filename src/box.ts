import "./style.css";
import { gsap } from "gsap";

export function animateBox() {
  // Timeline: container for multiple tweens
  let tl = gsap.timeline();

  // Tween: to change a single/multiple property of single/multiple object over time

  const boxContainer = document.querySelector<HTMLDivElement>("#box-container");

  for (let i = 0; i < 25; i++) {
    boxContainer!.innerHTML += `<div class="box"><span class="box-hover"></span></div>`;
  }
  boxContainer?.innerHTML;

  gsap.set(".box", { autoAlpha: 0 });
  gsap.set(".box", {
    autoAlpha: 1,
  });

  tl.fromTo(
    ".box",
    {
      opacity: 0,
      y: -400,
      background: "#fff",
    },
    {
      opacity: 1,
      y: 0,
      background: "#129490",
      duration: 2,
      ease: "bounce.out",
      borderRadius: "12px",
      stagger: {
        amount: 0.5,
        from: "random",
      },
    }
  )
    .to(".box", {
      x: 200,
      duration: 1,
      rotation: 360,
      ease: "bounce.out",
      stagger: {
        amount: 0.5, // they will share this 0.5s, "each" will delay the animation for the given amount of time
        from: "random",
        axis: null,
      },

      // repeat: 1,
    })
    .add([
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
    const tl = gsap.timeline({ paused: true });
    const tween = tl
      .add([
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
          repeat: 1, // -1 will be infinite
        }),
      ])
      .to(box, {
        duration: 0.2,
        ease: "none",
        opacity: 0,
        borderRadius: 0,
      });

    box.addEventListener("click", () => {
      tween.play();
    });
  });
}
