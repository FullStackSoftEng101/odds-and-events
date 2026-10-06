//====state
const bank = [1, 2, 3, 4, 5];
const odds = [1, 3, 5];
const even = [2, 4, 6];

//

function addNumberToBank(number) {}

function moveNumberFromBank() {}

function moveAllNumbersFromBank() {}

//========Components=======

function NumberForm() {}
function Bank() {
  const $section = document.createElement("section");
  $section.innerHTML = `
    <h2>Bank</h2>
    <p>${bank.join(" ")}</p>
    `;
  return $section;
}
function Odds() {
  const $section = document.createElement("section");
  $section.innerHTML = `
    <h2>Odds</h2>
    <p>${bank.join(" ")}</p>
    `;
  return $section;
}
function Evens() {
  const $section = document.createElement("section");
  $section.innerHTML = `
    <h2>Evens</h2>
    <p>${bank.join(" ")}</p>
    `;
  return $section;
}

//===Render=====

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Odds and Events</h1>
  <NumberForm></NumbeForm>
  <Bank></Bank>
  <Odds></Odds>
  <Evens></Evens>
    `;

  $app.querySelector("Bank").replaceWith(Bank());
  $app.querySelector("Odds").replaceWith(Odds());
  $app.querySelector("Evens").replaceWith(Evens());
}

render();
