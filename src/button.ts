import gsap from "gsap";

export function animateButton() {
  for (let i = 1; i <= 3; i++) {
    document.querySelector(
      "#buttons"
    )!.innerHTML += `<button id="button-${i}">Hello world ${i}</button>`;
  }

  animateFirstButton();
  animateSecondButton();
}

function animateFirstButton() {
  const button = document.querySelector("#button-1") as HTMLButtonElement;
  button?.appendChild(document.createElement("span"));

  const buttonSpan = button!.querySelector("span");
  function getCursorPosition(e: MouseEvent) {
    const target = e.target as HTMLElement;
    const rect = target.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    return { x, y };
  }
  button?.addEventListener("mouseenter", (e: MouseEvent) => {
    const mousePosition = getCursorPosition(e);

    gsap.to(buttonSpan, {
      scale: 9,
      duration: 0.2,
      backgroundColor: "#eca400",
      ease: "circ.out",
      top: mousePosition.y + "px",
      left: mousePosition.x + "px",
      right: undefined,
    });
  });

  button?.addEventListener("mouseleave", (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const elementData = target.getBoundingClientRect();

    const mousePosition = getCursorPosition(e);

    let position: {
      top?: string;
      bottom?: string;
      left?: string;
      right?: string;
    } = {};

    if (mousePosition.y < 0) {
      position.top = "-20px";
    } else if (elementData.height - mousePosition.y < 0) {
      position.bottom = "-20px";
    }

    if (mousePosition.x < 3) {
      position.left = "-20px";
    } else if (elementData.width - mousePosition.x < 3) {
      position.right = "-20px";
    }

    gsap.timeline().to(buttonSpan, {
      scale: 0,
      duration: 0.2,
      backgroundColor: "transparent",
      ease: "circ.out",
      ...position,
    });
  });

  button?.addEventListener("mousemove", (e: MouseEvent) => {
    // const target = e.target as HTMLElement
    const mousePosition = getCursorPosition(e);
    gsap.to(buttonSpan, {
      top: mousePosition.y + "px",
      left: mousePosition.x + "px",
    });
  });
}

function animateSecondButton() {
  const button = document.querySelector("#button-2") as HTMLButtonElement;
  button.innerHTML = `<span>button</span>`;

  const buttonSpan = button!.querySelector("span");

  button?.addEventListener("mouseenter", (e: MouseEvent) => {
    gsap
      .timeline()
      .to(buttonSpan, {
        yPercent: -150,
        duration: 0.2,
        ease: "power2.in",
      })
      .set(buttonSpan, {
        yPercent: 150,
      })
      .to(buttonSpan, {
        yPercent: 0,
        duration: 0.2,
        ease: "power2.in",
      });
  });
}
