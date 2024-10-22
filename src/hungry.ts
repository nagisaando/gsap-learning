import gsap from "gsap";
import { TextPlugin } from "gsap/all";

export function animateHungry() {
  gsap.registerPlugin(TextPlugin);

  document.getElementById("hungry")!.innerHTML = `<div id="hungry-text"></div>`;

  const text = ["I", "am", "hungry", "I am hungry"];

  const hungryText = document.getElementById("hungry-text");
  const tl = gsap.timeline();
  text.forEach((el, i) => {
    tl.from("#hungry-text", {
      opacity: 0,
      scale: 1,
    })
      .call(() => {
        hungryText!.textContent = el;
      })
      .to("#hungry-text", {
        duration: 0.5,
        opacity: 1,
        scale: 1.2,
        ease: "slow(0.7,0.7,false)",
      });

    if (i !== text.length - 1) {
      tl.to("#hungry-text", {
        duration: 0.5,
        opacity: 0,
        scale: 1.3,
        ease: "power4.in",
      });
    }
  });
}
