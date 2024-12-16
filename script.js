let totalBudget = 120000;
let totalExpenses = 100000;

function updateBalance() {
    const balance = totalBudget - totalExpenses;
    document.getElementById('balance').textContent = formatCurrency(balance);
}

function deleteExpense(button) {
    const row = button.parentElement.parentElement;
    const amount = parseInt(row.children[1].textContent.replace(/[^0-9]/g, ""));
    totalExpenses -= amount;
    document.getElementById('expenses').textContent = formatCurrency(totalExpenses);
    updateBalance();
    row.remove();
}

function showAddExpense() {
    const title = prompt("Entrez le titre de la dépense :");
    const amount = parseInt(prompt("Entrez le montant de la dépense :"));
    if (title && amount && !isNaN(amount)) {
        addExpense(title, amount);
    } else {
        alert("Données invalides !");
    }
}

function addExpense(title, amount) {
    const table = document.getElementById('expenseTable');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${title}</td>
        <td>${formatCurrency(amount)}</td>
        <td><button class="btn-delete" onclick="deleteExpense(this)">Supprimer</button></td>
    `;
    table.appendChild(newRow);
    totalExpenses += amount;
    document.getElementById('expenses').textContent = formatCurrency(totalExpenses);
    updateBalance();
}

function formatCurrency(amount) {
    return amount.toLocaleString("fr-FR") + "F CFA";
}



if (!localStorage.getItem("expenses")) {
    localStorage.setItem("expenses", JSON.stringify([
        { title: "Nourriture", amount: 40000 },
        { title: "Loyer", amount: 30000 },
        { title: "Transport", amount: 30000 }
    ]));
}

if (!localStorage.getItem("revenues")) {
    localStorage.setItem("revenues", JSON.stringify([
        { title: "Salaire", amount: 150000 }
    ]));
}



document.getElementById("expenseForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("expenseTitle").value;
    const amount = parseInt(document.getElementById("expenseAmount").value);

  
    
    window.location.href = "ajouter-revenu.html";
});
    

document.getElementById("revenueForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const title = document.getElementById("revenueTitle").value;
    const amount = parseInt(document.getElementById("revenueAmount").value);

  
    
    window.location.href = "index.html";
});
