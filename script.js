let balance = 0;

const incomeInput = document.getElementById('income');
const expenseInput = document.getElementById('expense');
const balanceDisplay = document.getElementById('balance');
const recordsList = document.getElementById('records');
const addBtn = document.getElementById('add-btn');

addBtn.addEventListener('click', () => {
    const income = parseFloat(incomeInput.value);
    const expense = parseFloat(expenseInput.value);

    if (!isNaN(income) && income > 0) {
        balance += income;
        const li = document.createElement('li');
        li.textContent = `收入 +${income}`;
        li.classList.add('income');
        recordsList.appendChild(li);
    }

    if (!isNaN(expense) && expense > 0) {
        balance -= expense;
        const li = document.createElement('li');
        li.textContent = `支出 -${expense}`;
        li.classList.add('expense');
        recordsList.appendChild(li);
    }

    balanceDisplay.textContent = balance.toFixed(2);

    incomeInput.value = '';
    expenseInput.value = '';
});
