const nav = document.querySelector("nav");
const logoMenu = document.querySelector("img");

logoMenu.addEventListener("click", function () {
  nav.classList.toggle("active");
});

async function getJSON() {
  const json = "assets/data.json";
  const request = new Request(json);
  const response = await fetch(request);
  const expenses = await response.json();
  return expenses;

  //   for (let i = 0; i < expenses.length; i++) {
  //     display(expenses[i]);
  //   }
}

function display(expense) {
  const section = document.querySelector("section");
  const cardExpense = document.createElement("div");
  cardExpense.classList.add("card-expense");
  const expenseAmount = document.createElement("li");

  expenseAmount.innerHTML = expense["amount"];
  cardExpense.appendChild(expenseAmount);
  section.appendChild(cardExpense);
}

const expenses = getJSON();
console.log(expenses);

for (let i = 0; i < expenses.length; i++) {
  display(expenses[i]);
}
