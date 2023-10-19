let subtitle = document.querySelector("#subtitle");
const light1 = document.querySelector("lightbulb1");
const light2 = document.querySelector("lightbulb2");
const light3 = document.querySelector("lightbulb3");

let count = 0;

light1.addEventListener("click", function (event) {
  light1.classlist.toggle("active");
  count += 1;
  console.log(count);
});
