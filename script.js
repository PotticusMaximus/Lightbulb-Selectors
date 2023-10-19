let subtitle = document.querySelector(".subtitle");
const lightbulb1 = document.querySelector("#lightbulb1");
const lightbulb2 = document.querySelector("#lightbulb2");
const lightbulb3 = document.querySelector("#lightbulb3");

let count = 0;

lightbulb1.addEventListener("click", function (event) {
  lightbulb1.classList.toggle("active");
  if (count === 1) {
    subtitle.innerHTML = `You've clicked the lights ${count} time`;
  } else {
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
  }
  count += 1;
  console.log(count);
});

lightbulb2.addEventListener("click", function (event) {
  lightbulb2.classList.toggle("active");
  if (count === 1) {
    subtitle.innerHTML = `You've clicked the lights ${count} time`;
  } else {
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
  }
  count += 1;
  console.log(count);
});

lightbulb3.addEventListener("click", function (event) {
  lightbulb3.classList.toggle("active");
  if (count === 1) {
    subtitle.innerHTML = `You've clicked the lights ${count} time`;
  } else {
    subtitle.innerHTML = `You've clicked the lights ${count} times`;
  }
  count += 1;
  console.log(count);
});
