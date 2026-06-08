let totalExpenses = 0;

// 1. Expense plus karne ke liye
function addExpense() {
    let name = document.getElementById('item-name').value;
    let amount = Number(document.getElementById('item-amount').value);

    if (name === "" || amount === 0) return;

    totalExpenses = totalExpenses + amount;
    document.getElementById('total-display').textContent = totalExpenses;

    let li = document.createElement('li');
    li.textContent = name + " — $" + amount;
    document.getElementById('expense-list').appendChild(li);

    document.getElementById('item-name').value = "";
    document.getElementById('item-amount').value = "";
}

// 2. Expense minus karne ke liye
function subExpense() {
    let name = document.getElementById('item-name').value;
    let amount = Number(document.getElementById('item-amount').value);

    if (name === "" || amount === 0) return;

    totalExpenses = totalExpenses - amount;
    document.getElementById('total-display').textContent = totalExpenses;

    let li = document.createElement('li');
    li.textContent = name + " — -$" + amount;
    document.getElementById('expense-list').appendChild(li);

    document.getElementById('item-name').value = "";
    document.getElementById('item-amount').value = "";
}

// 3. Buttons ko function se jodna
document.getElementById('add-button').onclick = addExpense;
document.getElementById('sub-button').onclick = subExpense;
