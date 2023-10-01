const container = document.querySelector(".container");
const level1 = document.getElementById("level-1");
const level2 = document.getElementById("level-2");
const level3 = document.getElementById("level-3");

// NOTE: The setTimeout() functions are used to give some delay
// to see the effect as the event capturing and bubbling phases
// starts and ends almost immeadiately after click event.

// Event Capturing (Outer to Inner)
level1.addEventListener(
  "click",
  () => {
    setTimeout(() => {
      console.log("Capturing-Phase: Level 1");
      level1.classList.toggle("current-target");
    }, 500);
  },
  {
    capture: true,
  }
);

level2.addEventListener(
  "click",
  () => {
    setTimeout(() => {
      console.log("Capturing-Phase: Level 2");
      level2.classList.toggle("current-target");
    }, 1000);
  },
  {
    capture: true,
  }
);

level3.addEventListener(
  "click",
  () => {
    setTimeout(() => {
      console.log("Capturing-Phase: Level 3");
      level3.classList.toggle("current-target");
    }, 1500);
  },
  {
    capture: true,
  }
);

// Event Bubbling (Inner to Outer)
level3.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Bubbling-Phase: Level 3");
    level3.classList.toggle("current-target");
  }, 2000);
});

level2.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Bubbling-Phase: Level 2");
    level2.classList.toggle("current-target");
  }, 2500);
});

level1.addEventListener("click", () => {
  setTimeout(() => {
    console.log("Bubbling-Phase: Level 1");
    level1.classList.toggle("current-target");
  }, 3000);
});

// Event Delegation
container.addEventListener("click", (event) => {
  if (event.target.tagName.toLowerCase() === "div") {
    console.clear();
    console.log(`Delegation-Target: ${event.target.id}`);
  }
});
