import gsap from "gsap";

export function animateButton() {
  for (let i = 1; i <= 3; i++) {
    document.querySelector(
      "#buttons"
    )!.innerHTML += `<button id="button-${i}">Button ${i}</button>`;
  }

  animateFirstButton();
}

function animateFirstButton() {
  const button1 = document.querySelector("#button-1") as HTMLButtonElement;
  button1?.appendChild(document.createElement("span"));

  const buttonSpan = button1!.querySelector("span");

  const hoverAnimation = gsap.timeline({ paused: true }).to(buttonSpan, {
    scale: 100,
    duration: 0.1,
    backgroundColor: "#eca400",
    ease: "circ.out",
  });

  button1?.addEventListener("mouseenter", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    console.log("mouse enter!!");
    hoverAnimation.play();
  });

  button1?.addEventListener("mouseleave", () => {
    console.log("mouse enter!!");
    hoverAnimation.reverse();
  });
}
