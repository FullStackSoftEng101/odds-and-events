//====state
const bank = [1, 2, 3, 4, 5];
const odds = [1, 3, 5];
const even = [2, 4, 6];

//

function addNumberToBank(number) {
  bank.push(number);
  render();
}

function moveNumberFromBank() {
  const number = bank.shift();
  if (number % 2 == 0) {
    even.push(number);
  } else {
    odds.push(number);
  }
  render();
}

function moveAllNumbersFromBank() {}

//========Components=======

function NumberForm() {
  const $form = document.createElement("form");
  $form.innerHTML = `
  <label>Add a number to the Bank
  <input type="number" name="number"/></label>
  <button>Add number</button>
  <button>Sort 1</button>
  <button>Sort All</button>
  `;
  return $form;
}

function NumberSection(label, numbers) {
  const $section = document.createElement("section");
  $section.innerHTML = `
    <h2>${label}</h2>
    <p>${numbers.join(" ")}</p>
    `;
  return $section;
}
// function Bank() {
//   const $section = document.createElement("section");
//   $section.innerHTML = `
//     <h2>Bank</h2>
//     <p>${bank.join(" ")}</p>
//     `;
//   return $section;
// }
// function Odds() {
//   const $section = document.createElement("section");
//   $section.innerHTML = `
//     <h2>Odds</h2>
//     <p>${odds.join(" ")}</p>
//     `;
//   return $section;
// }
// function Evens() {
//   const $section = document.createElement("section");
//   $section.innerHTML = `
//     <h2>Evens</h2>
//     <p>${even.join(" ")}</p>
//     `;
//   return $section;
// }

//===Render=====

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Odds and Events</h1>
  <NumberForm></NumberForm>
  <Bank></Bank>
  <Odds></Odds>
  <Evens></Evens>
    `;

  //   $app.querySelector("Bank").replaceWith(Bank());
  //   $app.querySelector("Odds").replaceWith(Odds());
  //   $app.querySelector("Evens").replaceWith(Evens());
  $app.querySelector("NumberForm").replaceWith(NumberForm());

  $app.querySelector("Bank").replaceWith(NumberSection("Bank", bank));
  $app.querySelector("Odds").replaceWith(NumberSection("Odds", odds));
  $app.querySelector("Evens").replaceWith(NumberSection("Evens", even));
}

render();
