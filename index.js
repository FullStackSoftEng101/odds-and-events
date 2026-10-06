//====state
const bank = [];
const odds = [];
const even = [];

//

function addNumberToBank(number) {}

function moveNumberFromBank() {}

function moveAllNumbersFromBank() {}

//========Components=======

function NumberForm() {}
function Bank() {}
function Odds() {}
function Evens() {}

//===Render=====

function render() {
  const $app = document.querySelector("#app");
  $app.innerHTML = `
  <h1>Odds and Events</h1>
  <NumberForm></NumbeForm>
  <Bank></Bank>
  <Evens></Evens>
    `;
}

render();
