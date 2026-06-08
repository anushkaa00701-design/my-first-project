let totalExpenses = 0;
let last = null;

function add(isSub) {
    let name = document.getElementById('item-name').value;
    let amount = Number(document.getElementById('item-amount').value);

    // Agar boxes khali hain toh kuch mat karo
    if (name === "" || amount === 0) return;

    // Kharcha plus (+) ya minus (-) karne ka logic
    if (isSub === true) {
        totalExpenses = totalExpenses - amount; // sub Expense button ke liye
    } else {
        totalExpenses = totalExpenses + amount; // Add Expense button ke liye
    }
    
    // Screen par total update karo
    document.getElementById('total-display').textContent = totalExpenses;

    let li = document.createElement('li');
    
    if (isSub === true) {
        li.textContent = name + " — -$" + amount;
        li.classList.add('sub-item');
        if (last !== null) {
            last.after(li);
        } else {
            document.getElementById('expense-list').appendChild(li);
        }
    } else {
        li.textContent = name + " — $" + amount;
        document.getElementById('expense-list').appendChild(li);
        last = li;
    }

    // Input boxes khali karo
    document.getElementById('item-name').value = "";
    document.getElementById('item-amount').value = "";
}

// Buttons ko functions se connect karo
document.getElementById('add-button').onclick = function() { add(false); };
document.getElementById('sub-button').onclick = function() { add(true); };
